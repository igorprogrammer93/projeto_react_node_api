const express = require('express');
const documentController = require('../controllers/documentController');
const router = express.Router({ mergeParams: true });

router.post('/', documentController.createDocument);
router.get('/', documentController.getAllDocuments);
router.put('/:id', documentController.updateDocument);
router.delete('/:id', documentController.deleteDocument);

module.exports = router;
