const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const UsuarioController = require('./controllers/UsuarioController');
const DocumentController = require('./controllers/DocumentController');
//ONGS
routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

//INCIDENTS
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//SESSIONS
routes.post('/sessions', SessionController.create);

//PROFILES
routes.get('/profiles',ProfileController.index);

//USUARIOS
routes.get('/usuarios/:id', UsuarioController.porId);
routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios',UsuarioController.create);

//DOCUMENTS
routes.get('/documents', DocumentController.index);
routes.post('/documents', DocumentController.create);
routes.delete('/documents/:id', DocumentController.delete);
module.exports = routes;