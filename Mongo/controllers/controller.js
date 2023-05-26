/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - text
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: User name
 *         text:
 *           type: string
 *           description: Some comments
 *         date:
 *           type: string
 *           description: registration date
 *       example:
 *         id: 643e6eded74eb507d59850a4
 *         name: Alihan
 *         text: is a student
 *         date: 2023-4-18
 *     
 *     ApiKey:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: User name
 *       example:
 *         name: Alihan
 *     Model:
 *       type: object
 *       required:
 *         - name
 *         - modelname
 *         - type
 *         - object
 *         - overview
 *         - comment
 *         - created_time
 *         - updated_time
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: User name
 *         modelname:
 *           type: string
 *           description: The model name
 *         type:
 *           type: string
 *           description: Model type
 *         object:
 *           type: object
 *           description: The object
 *         overview:
 *           type: string
 *           description: Model description
 *         comment:
 *           type: string
 *           description: Comments list
 *         created_time:
 *           type: string
 *           description: Сreation time
 *         updated_time:
 *           type: string
 *           description: Update time
 * 
 * 
 *       example:
 *         id: 646c01e459a719d478927c94
 *         name: Alihan
 *         modelname: modelname
 *         type: type
 *         object: {"2": "Yes"}
 *         overview: overview
 *         comment: comment
 *         created_time: 2023-05-22T23:59:32.557+00:00
 *         updated_time: 2023-05-22T23:59:32.557+00:00
 *        
 *         
 */
/**
 * @swagger
 * tags:
 *   name: MongoDB API
 *   description: My server for Mongo
 * /CRUD/comments:
 *   get:
 *     summary: All documents from collection "users"
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new user
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                  type: object
 *                  required:
 *                      - name
 *                      - text
 *                  properties:
 *                      id:
 *                          type: string
 *                          description: The auto-generated id of the user
 *                      name:
 *                          type: string
 *                          description: User name
 *                      text:
 *                          type: string
 *                          description: Some comments
 *                      date:
 *                          type: string
 *                          description: registration date
 *                  example:
 *                      name: Alihan
 *                      text: is a student
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Some server error
 * /CRUD/comments/{id}:
 *   get:
 *     summary: Get user by id
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 * /CRUD/apikey/:
 *   post:
 *     summary: Create a new user ApiKey
 *     tags: [ApiKey]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ApiKey'
 *     responses:
 *       200:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  required:
 *                      - name
 *                  properties:
 *                      id:
 *                          type: string
 *                          description: The auto-generated id of the user
 *                      name:
 *                          type: string
 *                          description: User name
 *                  example:
 *                      id: d8b7dc2741c4dc38590eef72cafea62f
 *                      name: Alihan
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Some server error
 * /CRUD/models/:
 *   get:
 *     summary: All documents from collection "model"
 *     tags: [Models]
 *     responses:
 *       200:
 *         description: The list of the models
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Model'
 * /CRUD/models/?apiKey={apiKey}:
 *   post:
 *     summary: Create a new model
 *     tags: [Models]
 *     parameters:
 *       - in: path
 *         name: apiKey
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ApiKey
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                  type: object
 *                  required:
 *                      - name
 *                      - modelname
 *                      - type
 *                      - object
 *                      - overview
 *                      - comment
 *                      - created_time
 *                      - updated_time
 *                  properties:
 *                      id:
 *                          type: string
 *                          description: The auto-generated id of the user
 *                      name:
 *                          type: string
 *                          description: User name
 *                      modelname:
 *                          type: string
 *                          description: The model name
 *                      type:
 *                          type: string
 *                          description: Model type
 *                      object:
 *                          type: object
 *                          description: The object
 *                      overview:
 *                          type: string
 *                          description: Model description
 *                      comment:
 *                          type: string
 *                          description: Comments list
 *                      created_time:
 *                          type: string
 *                          description: Сreation time
 *                      updated_time:
 *                          type: string
 *                          description: Update time
 * 
 * 
 *                  example:
 *                      name: Alihan
 *                      modelname: modelname
 *                      type: type
 *                      object:  {"2": "Yes"}
 *                      overview: overview
 *                      comment: comment
 *                      
 *     responses:
 *       200:
 *         description: The list of models
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Model'
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: non - existent ApiKey
 *       500:
 *         description: Some server error
 * /CRUD/models/{id}:
 *   get:
 *     summary: One documents from collection "model" with id
 *     tags: [Models]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: Model with id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Model'
 *       404:
 *        description: No models found
 *       500:
 *          description: Some server error
 * /CRUD/models/{id}/?apiKey={apiKey}:
 *   put:
 *    summary: Update the model by the id
 *    tags: [Models]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *      - in: path
 *        name: apiKey
 *        schema:
 *          type: string
 *        required: true
 *        description: The user ApiKey
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *                  type: object
 *                  required:
 *                      - name
 *                      - modelname
 *                      - type
 *                      - object
 *                      - overview
 *                      - comment
 *                      - created_time
 *                      - updated_time
 *                  properties:
 *                      id:
 *                          type: string
 *                          description: The auto-generated id of the user
 *                      name:
 *                          type: string
 *                          description: User name
 *                      modelname:
 *                          type: string
 *                          description: The model name
 *                      type:
 *                          type: string
 *                          description: Model type
 *                      object:
 *                          type: object
 *                          description: The object
 *                      overview:
 *                          type: string
 *                          description: Model description
 *                      comment:
 *                          type: string
 *                          description: Comments list
 *                      created_time:
 *                          type: string
 *                          description: Сreation time
 *                      updated_time:
 *                          type: string
 *                          description: Update time
 * 
 * 
 *                  example:
 *                      name: Alihan
 *                      modelname: modelname
 *                      type: type
 *                      object:  {"2": "Yes"}
 *                      overview: overview
 *                      comment: comment
 *    responses:
 *      200:
 *        description: The list of models
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Model'
 *      400:
 *        description: Invalid request body
 *      401:
 *        description: Bad API key 
 *      404:
 *        description: No models found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the model by id
 *     tags: [Models]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *      - in: path
 *        name: apiKey
 *        schema:
 *          type: string
 *        required: true
 *        description: The user ApiKey
 *
 *     responses:
 *       200:
 *         description: The model was deleted
 *       404:
 *         description: The model was not found
 */

const express = require('express');
const controller = express.Router();
const { getcom, getcomid, postcom } = require('../services/service');
const { postApi, checkApi, insertMod, updateMod, deleteMod, findMod, findOneMod, deleteApi } = require('../services/serviceCRUD');



controller.post('/comments', postcom);

controller.get('/comments', getcom);

controller.get('/comments/:id', getcomid);

controller.get('/models/', findMod);

controller.get('/models/:id', findOneMod);

controller.post('/api',  postApi);

controller.delete('/api/:id', deleteApi);

controller.delete('/models/:id', checkApi, deleteMod);

controller.post('/models', checkApi,  insertMod);

controller.put('/models/:id', checkApi,  updateMod);

module.exports = controller;

