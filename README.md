SEAFRIGO Egypt - Fixed Vite React project

How to deploy to Vercel (step-by-step):

1) Unzip the folder `seafrigo-react-fixed.zip`.
2) (Optional) Edit files in src/ if you want to change text or images.
3) Go to https://vercel.com/new and login.
4) Click 'Import Project' -> 'Deploy from my Git Repository' OR choose 'Deploy from folder' by dragging the unzipped folder.
   - If you upload from folder, Vercel will detect Vite and set build command to `npm run build`.
5) Click Deploy and wait ~1 minute until it finishes. You will get a live URL.
6) To view the admin dashboard: visit `https://your-site-url/#dashboard` and enter password `Seafrigo2025`.

Notes:
- Supabase anon key is embedded for quick setup. For production, add it as an Environment Variable on Vercel and replace the string in src/App.jsx with process.env.SUPABASE_ANON_KEY.
