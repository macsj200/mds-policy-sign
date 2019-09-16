import { sign, verify } from "./signature_api";

JsonRoutes.add("post", "/sign", function (req, res, next) {
  const policy = req.body

  JsonRoutes.sendResult(res, {
    data: sign(policy)
  })
})

JsonRoutes.add("post", "/verify", function (req, res, next) {
  const data = req.body
  const { policy, signature } = data

  JsonRoutes.sendResult(res, {
    data: { result: verify(policy, signature) }
  })
})

JsonRoutes.add("get", "/public_key", function (req, res, next) {
  JsonRoutes.sendResult(res, {
    data: process.env.PUBLIC_KEY
  })
})

JsonRoutes.add("get", "/roll_keys", function (req, res, next) {
  JsonRoutes.sendResult(res, {
    data: process.env.PUBLIC_KEY
  })
})