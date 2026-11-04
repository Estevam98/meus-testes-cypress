// Importo `test` e `expect` direto do Playwright, e não do fixtures.ts.
// Teste de API não abre página, então o bloqueio de anúncios do fixture não serve aqui.
import { test, expect } from '@playwright/test';

// randomUUID gera um identificador único. Uso no e-mail para o cadastro nunca
// repetir, nem com testes em paralelo (Date.now() pode colidir).
import { randomUUID } from 'node:crypto';

// O playwright.config.ts aponta o baseURL para o Automation Exercise.
// Este arquivo testa outra API, então troco o baseURL SÓ AQUI.
// Com isso, os caminhos abaixo ('/usuarios') são completados com este endereço.
test.use({ baseURL: 'https://serverest.dev' });

// Função auxiliar: monta os dados de um usuário novo e único.
function novoUsuario() {
  const id = randomUUID();
  return {
    nome: `qa-${id.slice(0, 8)}`,
    email: `qa.${id}@example.com`,
    password: 'Senha@123',
    // A ServeRest espera texto "true"/"false", não o booleano. Confirme na doc da API.
    administrador: 'true',
  };
}

// test.describe agrupa os testes relacionados no relatório.
test.describe('ServeRest: usuários (API)', () => {

  // `async` marca a função como assíncrona: ela devolve uma Promise.
  // `{ request }` pede ao Playwright a fixture `request`: um cliente HTTP pronto,
  // já configurado com o baseURL, que NÃO abre navegador.
  test('cadastra um usuário e confirma que o dado foi gravado', async ({ request }) => {
    const usuario = novoUsuario();

    // `await` espera a resposta chegar antes de seguir. Sem ele, a variável
    // receberia uma Promise pendente, e não a resposta.
    // `data` envia o objeto como corpo JSON e já coloca o cabeçalho Content-Type.
    const resposta = await request.post('/usuarios', { data: usuario });

    // `.json()` lê o corpo da resposta e converte em objeto. Também é assíncrono.
    const corpo = await resposta.json();

    // `finally` roda SEMPRE, mesmo se uma asserção falhar. Garante a limpeza.
    try {
      // ok() é true para qualquer status de 200 a 299. Confirma "deu certo", mas é amplo.
      expect(resposta.ok()).toBeTruthy();

      // O status exato é mais forte: 201 significa "criado". Se a API passar a responder
      // 200, este teste avisa a mudança de contrato.
      expect(resposta.status()).toBe(201);

      // Confere a mensagem de negócio. Se mudar o texto, o teste precisa ser revisado.
      expect(corpo.message).toBe('Cadastro realizado com sucesso');

      // O _id existe e é texto não vazio: é ele que usamos para consultar e apagar.
      expect(corpo._id).toEqual(expect.any(String));

      // Prova de persistência: consulta o usuário criado pelo ID.
      // É o equivalente de "conferir no banco" que você está treinando em SQL.
      const consulta = await request.get(`/usuarios/${corpo._id}`);
      expect(consulta.status()).toBe(200);

      // Compara com o que ENVIAMOS. O esperado vem de fora da API, não da resposta dela.
      const salvo = await consulta.json();
      expect(salvo.nome).toBe(usuario.nome);
      expect(salvo.email).toBe(usuario.email);
    } finally {
      // Limpeza: apaga o usuário criado. Só tenta se o cadastro devolveu um _id.
      // Não uso expect aqui de propósito: a limpeza não deve reprovar o teste.
      if (corpo._id) {
        await request.delete(`/usuarios/${corpo._id}`);
      }
    }
  });

  test('rejeita cadastro com e-mail já usado', async ({ request }) => {
    const usuario = novoUsuario();

    // Cria o primeiro usuário, que deve dar certo.
    const primeira = await request.post('/usuarios', { data: usuario });
    const primeiro = await primeira.json();

    try {
      expect(primeira.status()).toBe(201);

      // Tenta cadastrar OUTRO usuário com o MESMO e-mail. É o cenário negativo:
      // regra de negócio de unicidade.
      const segunda = await request.post('/usuarios', {
        data: { ...usuario, nome: 'outro-nome' },
      });

      // 400 = pedido inválido. Diferente de 201, e também de 500 (erro do servidor).
      expect(segunda.status()).toBe(400);

      // A mensagem deve explicar o motivo. Uso regex e não texto exato, para não
      // quebrar se mudarem a pontuação. Confira o texto real na primeira execução.
      const corpo = await segunda.json();
      expect(corpo.message).toMatch(/email/i);
    } finally {
      if (primeiro._id) {
        await request.delete(`/usuarios/${primeiro._id}`);
      }
    }
  });
});