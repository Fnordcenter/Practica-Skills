---
name: debugging-network-tracer
description: Investigates API failures, timeout issues, and network payload formatting anomalies.
---

# Debugging Network Tracer Skill

Investigates, diagnoses, and resolves issues related to network communication, API integrations, timeouts, and malformed request/response data between distributed systems.

## When to use
- Application fails to communicate with a third-party API or internal microservice.
- User encounters unexpected HTTP status codes (4xx, 5xx) or CORS errors.
- Network requests are timing out, dropping, or taking too long.
- Data payloads (JSON, XML, Protobuf) are failing serialization or deserialization constraints.

## How to use
- **Phase 1 (Analysis):**
  - Identify the requesting client (browser, backend script) and the target server.
  - Request raw HTTP traces (e.g., cURL commands, Network Tab HAR files, Postman exports).
  - Obtain the exact error message, expected API contract, and payload structure.
- **Phase 2 (Execution):**
  - Analyze headers (Auth tokens, Content-Type, Accept) for discrepancies.
  - Validate the request payload against the expected schema or API documentation.
  - Identify DNS, proxy, or firewall configuration implications if the connection drops entirely.
  - Provide corrected request construction code (e.g., formatting `fetch` or `requests` properly).
- **Phase 3 (Validation):**
  - Explain exactly why the server rejected the request or why the client failed to parse the response.
  - Supply a verified, standalone code snippet (or cURL equivalent) that represents the correct network call.

## Contingencies & Edge Cases
- **Missing Inputs:** If only the error message is provided (e.g., "Network Error"), instruct the user on how to extract the raw request/response headers and body for deeper analysis.
- **Failures:** If an API is persistently down, recommend implementing retry logic with exponential backoff and circuit breakers.
- **Scope Limits:** Cannot diagnose physical network layer issues (Layer 1-3) beyond what application-layer tools (Layer 7 HTTP/TCP) reveal.

## Specifications
- When suggesting fixes, include both the theoretical correction (e.g., "Add the Authorization header") and the practical code implementation.
- Mask sensitive data (tokens, passwords) in all returned outputs.
