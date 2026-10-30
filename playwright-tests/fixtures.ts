import { test as base, expect, APIRequestContext, BrowserContext } from '@playwright/test';
import { randomUUID } from 'node:crypto';

export type Credentials = { name: string; email: string; password: string };

const AD_AND_TRACKER_HOSTS =
  /(googlesyndication|doubleclick|google-analytics|googletagmanager|adservice\.google|pagead2|adsbygoogle)/;

export async function blockAds(context: BrowserContext) {
  await context.route(AD_AND_TRACKER_HOSTS, (route) => route.abort());
}

function uniqueUser(): Credentials {
  const id = randomUUID();
  return {
    name: `qa-${id.slice(0, 8)}`,
    email: `qa.${id}@example.com`,
    password: 'Senha@123',
  };
}

async function createAccountViaApi(request: APIRequestContext, u: Credentials) {
  const res = await request.post('/api/createAccount', {
    form: {
      name: u.name, email: u.email, password: u.password,
      title: 'Mr', birth_date: '1', birth_month: '1', birth_year: '1990',
      firstname: 'Lucas', lastname: 'Estevam', company: 'QA',
      address1: '123 Main St', address2: '', country: 'United States',
      zipcode: '90210', state: 'California', city: 'Los Angeles',
      mobile_number: '1234567890',
    },
  });
  // Esta API costuma responder HTTP 200 e carregar o status no corpo. Confira na doc.
  const body = await res.json();
  expect(body.responseCode, `createAccount: ${JSON.stringify(body)}`).toBe(201);
}

async function deleteAccountViaApi(request: APIRequestContext, u: Credentials) {
  await request.delete('/api/deleteAccount', {
    form: { email: u.email, password: u.password },
  });
}

type Fixtures = {
  newUser: Credentials;    // credenciais únicas; a conta será criada pela UI
  seededUser: Credentials; // conta já criada via API (Arrange)
};

export const test = base.extend<Fixtures>({
  // Sobrescreve o context padrão: todo teste já nasce sem anúncios
  context: async ({ context }, use) => {
    await blockAds(context);
    await use(context);
  },

  newUser: async ({ request }, use) => {
    const user = uniqueUser();
    await use(user);
    await deleteAccountViaApi(request, user); // teardown, mesmo se o teste falhar
  },

  seededUser: async ({ request }, use) => {
    const user = uniqueUser();
    await createAccountViaApi(request, user);
    await use(user);
    await deleteAccountViaApi(request, user);
  },
});

export { expect };