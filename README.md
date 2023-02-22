# "ChatGPT"
- via OpenAI's official text completion API
- using "text-davinci-003"
- not free, but you have some free credits to try it out
- need OPENAI_API_KEY
- Powered by [transitive-bullshit/chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)

## How to use
- `npm ci`
- rename `.env.example` to `.env`
- add your OpenAI API key to `.env`
- Change the text that you want to send to "ChatGPT" in `src/index.ts`'s `await api.sendMessage('Hi ChatGPT!');`
- `npm run start`