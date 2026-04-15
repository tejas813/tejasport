import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // Setup Supabase Client
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({ error: "Missing Supabase configuration in environment variables" });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // GET Data
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('portfolio_data')
      .select('content')
      .eq('id', 1)
      .single();

    if (error) {
      console.warn("No data row found yet, returning empty logic");
      return res.status(200).json({});
    }
    
    return res.status(200).json(data?.content || {});
  }

  // POST Updated Data
  if (req.method === 'POST') {
    const newContent = req.body;
    
    // Check if body is valid
    if (!newContent) {
      return res.status(400).json({ error: "No data provided" });
    }

    const { data, error } = await supabase
      .from('portfolio_data')
      .upsert({ id: 1, content: newContent })
      .select();

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to update database' });
    }

    return res.status(200).json({ message: "Portfolio data updated globally 🚀" });
  }

  // Handle Unsupported Verbs
  return res.status(405).json({ error: "Method not allowed" });
}
