require('dotenv').config();

async function main() {
  // handle commonjs import esm error
  const importDynamic = new Function('modulePath', 'return import(modulePath)');
  const { ChatGPTAPI } = await importDynamic('chatgpt');

  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    // debug: true,
  });

  const res = await api.sendMessage('Hi ChatGPT!'); // Change this to your message
  console.log(res.text);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
