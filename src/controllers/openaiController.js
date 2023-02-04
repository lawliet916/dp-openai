import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const openaiController = async (req, res) => {
  const { ask } = req.body;

  if (!process.env.OPENAI_API_KEY) {
    console.log(process.env.OPENAI_API_KEY);
    return res.status(400).json({ message: "Configure sua api key!" });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: ask,
      temperature: 0,
      max_tokens: 951,
    });

    res.json({
      completion,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Ocorreu um erro!" });
  }
};
