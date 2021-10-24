import Axios from "axios";

export const triggerDeployment = async () => {
  await Axios({
    url: process.env.DEPLOY_HOOK_URL,
    method: 'POST'
  });
}