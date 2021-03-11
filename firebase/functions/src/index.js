const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const axios = require("axios");
const { EncryptionService } = require('./encryption');

exports.quiz = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
      const params = req.body;
      if (!params || !params.key) {
        return res.status(400).json({ error: 'Ensure all fields are included' });
      }
  
      try {
        const difficulty = params.difficulty || '';
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&type=boolean&difficulty=${difficulty}`);        
        const encryptionService = EncryptionService();

        const encrypted = encryptionService.publicEncrypt(params.key, JSON.stringify(response.data));
        return res.json({ status: 'success', encrypted });
      } catch (e) {
        console.error(e.message);
        return res.status(403).json({ error: e.message });
      }
    });
});