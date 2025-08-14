# 🍳 Chef Claude – AI-Powered Recipe Generator

Chef Claude is a React-based web app that generates creative recipes from a list of ingredients you provide.  
It uses AI models via the **Hugging Face Inference API** to craft unique cooking ideas, displayed beautifully using Markdown.

---

## 🚀 Features

- **Dynamic ingredient list** – Add and remove ingredients on the fly.
- **AI recipe generation** – Powered by Hugging Face models (Mistral).
- **Markdown rendering** – Recipes displayed with headings, lists, and formatting.
- **Loading indicator** – Animated spinner while recipes are being generated.
- **Responsive UI** – Works on desktop and mobile.

---

## 🛠 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** CSS
- **Markdown Rendering:** [`react-markdown`]
- **AI API:** Hugging Face Inference SDK
- **Deployment:** Netlify

---

## 🔑 Environment Variables

To run this app locally, you need a **Hugging Face API key**.

1. Create a `.env` file in your project root:

   ```env
   VITE_HF_ACCESS_TOKEN=your_api_key_here
   ```

2. Access it in code:
   ```js
   const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);
   ```

> ⚠️ In Vite, **environment variables must start with `VITE_`** to be exposed to the client.

---

## 💻 Installation & Local Development

1. Clone this repo:

   ```bash
   git clone https://github.com/your-username/chef-claude.git
   cd chef-claude
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📦 Build for Production

```bash
npm run build
```
