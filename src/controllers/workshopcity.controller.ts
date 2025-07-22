import {Request, Response} from 'express';
import {customeResponse} from '../common/customResponses';
import {httpClientPlugin} from '../plugins/http-client.plugin';
import {RETELL_API_KEY_AIC, RETELL_API_KEY_WSC} from '../config/constants';

export class WorkShopCityController {
    static async createWebCall(req: Request, res: Response): Promise<void> {
        const {agent_id, metadata, retell_llm_dynamic_variables} = req.body;

        // Prepare the payload for the API request
        const payload: any = {agent_id};

        // Conditionally add optional fields if they are provided
        if (metadata) {
            payload.metadata = metadata;
        }

        if (retell_llm_dynamic_variables) {
            payload.retell_llm_dynamic_variables = retell_llm_dynamic_variables;
        }

        const response = await httpClientPlugin.post('https://api.retellai.com/v2/create-web-call', payload, {
            headers: {
                Authorization: `Bearer ${RETELL_API_KEY_AIC}`, // Replace with your actual Bearer token
                'Content-Type': 'application/json',
            },
        });

        customeResponse({res, status: 201, ok: true, msg: 'Success', data: response});
    }
}
