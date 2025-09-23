from nearai.agents.environment import Environment
from nearai.agents.models.tool_definition import MCPTool
import aiohttp
import json

mcp_tool_get_user = MCPTool(
    name="get_user",
    description="Get user information including Near account ID and BTC address",
    inputSchema={
        "type": "object",
        "properties": {},
        "required": []
    }
)

async def call_get_user_api(account_id: str):
    try:
        # Prepare the mb-metadata header
        mb_metadata = {"accountId": account_id}
        headers = {
            "mb-metadata": json.dumps(mb_metadata),
            "Content-Type": "application/json"
        }

        # Make the API call
        async with aiohttp.ClientSession() as session:
            async with session.get(
                "https://www.bitcoin-agent.xyz/api/tools/get-user",
                headers=headers
            ) as response:
                if response.status == 200:
                    data = await response.json()
                    return data
                else:
                    error_data = await response.json()
                    return {"error": error_data.get("error", "Failed to get user details")}

    except Exception:
        return {"error": "Failed to get user details"}



def run(env: Environment):
    # Your agent code here
    prompt = {"role": "system", "content": "An assistant that gives information about the user's BTC wallet address and BTC balance, creates a Bitcoin txn and also helps with deposit and swap for Bitcoin"}
    result = env.completion([prompt] + env.list_messages())
    env.add_reply(result)

run(env)

