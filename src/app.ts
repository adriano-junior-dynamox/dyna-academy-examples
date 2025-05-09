import express from 'express'
import { V1UsersController } from './domains/user-v1/adapters/routes/v1/users/controller'

const app = express()

const v1UsersController = new V1UsersController()

app.post("v1/users", v1UsersController.create)