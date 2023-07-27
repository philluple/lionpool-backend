const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const getMatches = require("./backend-match")

const db = admin.firestore();

router.get('/matches', async (req, res) => {
	try {
		//call match function
		const document_id = req.query.docId
	  	const airport = req.query.airport
		const currentUser = req.query.currentUser
		const results = await getMatches(document_id, airport, currentUser)
		if (results.length == 0){
			//HTTP CODE OF 204 MEANS NO CONTENT BUT GOOD REQUEST
			console.log("No matches, status code 204")
			res.status(204).json(results)
		} else{
			res.status(200).json(results)
		}
	} catch (error) {
	  	console.error('Error fetching matches:', error);
	  	res.status(500).json({ error: 'Failed to fetch matches' });
	}
  });

module.exports = router;