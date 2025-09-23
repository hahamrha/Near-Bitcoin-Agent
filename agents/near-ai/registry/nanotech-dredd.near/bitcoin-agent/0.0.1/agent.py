from nearai.agents.environment import Environment
from nearai.agents.models.tool_definition import MCPTool
import aiohttp
import json


def run(env: Environment):
    # Your agent code here
    prompt = {"role": "system", "content": "An assistant that gives information about the user's BTC wallet address and BTC balance, creates a Bitcoin txn and also helps with deposit and swap for Bitcoin"}
    result = env.completion([prompt] + env.list_messages())
    env.add_reply(result)

run(env)

