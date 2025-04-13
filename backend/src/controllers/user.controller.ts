class UserController {
  async getUser(request: Request, response: Response) {
    return response.json('UserController.getUser()')
  }
}

module.exports = UserController
