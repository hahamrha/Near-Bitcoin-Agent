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

mcp_tool_create_btc_mpc_txn = MCPTool(
    name="create_btc_mpc_txn",
    description="Creates a NEAR txn that utilizes near chain signatures to send transaction on bitcoin mainnet",
    inputSchema={
        "type": "object",
        "properties": {
            "btcReceiver": {
                "type": "string",
                "description": "The Bitcoin mainnet wallet address of receiver"
            },
            "btcAmountInSatoshi": {
                "type": "string",
                "description": "The amount BTC in satoshi to transfer"
            }
        },
        "required": ["btcReceiver", "btcAmountInSatoshi"]
    }
)

mcp_tool_send_btc_txn = MCPTool(
    name="send_btc_txn",
    description="Send the signed payload to BTC mainnet",
    inputSchema={
        "type": "object",
        "properties": {
            "btcReceiver": {
                "type": "string",
                "description": "The BTC address of the receiver"
            },
            "btcAmountInSatoshi": {
                "type": "string",
                "description": "The amount of BTC to transfer in satoshi"
            },
            "txHash": {
                "type": "string",
                "description": "The txHash of the signed txn from near"
            }
        },
        "required": ["btcReceiver", "btcAmountInSatoshi", "txHash"]
    }
)

mcp_tool_check_supported_token = MCPTool(
    name="check_supported_token",
    description="Check supported token for swap to BTC on NEAR",
    inputSchema={
        "type": "object",
        "properties": {
            "assetName": {
                "type": "string",
                "description": "The name or symbol of the asset to check"
            }
        },
        "required": ["assetName"]
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

async def call_create_btc_mpc_txn_api(account_id: str, btcReceiver: str, btcAmountInSatoshi: str):
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
                f"https://www.bitcoin-agent.xyz/api/tools/create-btc-mpc-txn?btcReceiver={btcReceiver}&btcAmountInSatoshi={btcAmountInSatoshi}",
                headers=headers
            ) as response:
                if response.status == 200:
                    data = await response.json()
                    return data
                else:
                    error_data = await response.json()
                    return {"error": error_data.get("error", "Failed to create BTC MPC transaction")}

    except Exception:
        return {"error": "Failed to create BTC MPC transaction"}

async def call_send_btc_txn_api(account_id: str, btcReceiver: str, btcAmountInSatoshi: str, txHash: str):
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
                f"https://www.bitcoin-agent.xyz/api/tools/send-btc-txn?btcReceiver={btcReceiver}&btcAmountInSatoshi={btcAmountInSatoshi}&txHash={txHash}",
                headers=headers
            ) as response:
                if response.status == 200:
                    data = await response.json()
                    return data
                else:
                    error_data = await response.json()
                    return {"error": error_data.get("error", "Failed to send BTC transaction")}

    except Exception:
        return {"error": "Failed to send BTC transaction"}

async def call_check_supported_token_api(account_id: str, assetName: str):
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
                f"https://www.bitcoin-agent.xyz/api/tools/check-supported-token?assetName={assetName}",
                headers=headers
            ) as response:
                if response.status == 200:
                    data = await response.json()
                    return data
                else:
                    error_data = await response.json()
                    return {"error": error_data.get("error", "Failed to check supported token")}

    except Exception:
        return {"error": "Failed to check supported token"}


def run(env: Environment):
    tool_registry = env.get_tool_registry(new=True)
    tool_registry.register_mcp_tool(mcp_tool_get_user, call_get_user_api)
    tool_registry.register_mcp_tool(mcp_tool_get_btc_balance, call_get_btc_balance_api)
    tool_registry.register_mcp_tool(mcp_tool_create_btc_mpc_txn, call_create_btc_mpc_txn_api)
    tool_registry.register_mcp_tool(mcp_tool_send_btc_txn, call_send_btc_txn_api)

    prompt = {"role": "system", "content": "An assistant that gives information about the user's BTC wallet address and BTC balance, creates a Bitcoin txn and also helps with deposit and swap for Bitcoin"}
    result = env.completions_and_run_tools([prompt] + env.list_messages(), tools=tool_registry.get_all_tool_definitions())
    env.add_reply(result)

run(env)

