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

mcp_tool_get_btc_balance = MCPTool(
    name="get_btc_balance",
    description="Get BTC balance and address for the user",
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

async def call_get_btc_balance_api(account_id: str):
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
                "https://www.bitcoin-agent.xyz/api/tools/get-btc-balance",
                headers=headers
            ) as response:
                if response.status == 200:
                    data = await response.json()
                    return data
                else:
                    error_data = await response.json()
                    return {"error": error_data.get("error", "Failed to get BTC balance")}

    except Exception:
        return {"error": "Failed to get BTC balance"}


def run(env: Environment):
    tool_registry = env.get_tool_registry(new=True)
    tool_registry.register_mcp_tool(mcp_tool_get_user, call_get_user_api)
    tool_registry.register_mcp_tool(mcp_tool_get_btc_balance, call_get_btc_balance_api)

    prompt = {"role": "system", "content": "An assistant that gives information about the user's BTC wallet address and BTC balance, creates a Bitcoin txn and also helps with deposit and swap for Bitcoin"}
    result = env.completions_and_run_tools([prompt] + env.list_messages(), tools=tool_registry.get_all_tool_definitions())
    env.add_reply(result)

run(env)

