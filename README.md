# Coprocessor Request/Response Type Definitions

This repository provides examples of type definitions for the coprocessor request/response lifecycle in various programming languages, including TypeScript, C#, Java, Kotlin, Go, and Clojure.

**The code in this repository is experimental and has been provided for reference purposes only. Community feedback is welcome but this project may not be supported in the same way that repositories in the official [Apollo GraphQL GitHub organization](https://github.com/apollographql) are. If you need help you can file an issue on this repository, [contact Apollo](https://www.apollographql.com/contact-sales) to talk to an expert, or create a ticket directly in Apollo Studio.**

## Installation

To use the provided type definitions, you need to copy the respective code snippets into your project's codebase. Each language-specific example is self-contained and can be directly integrated into your project.

### TypeScript / c\# / Java / Kotlin / Go

```bash
# No installation required, just copy the code snippet from the language folder into your project. Then use as the example provided.
```

## Usage

Provide detailed usage instructions here.

### TypeScript

```typescript
const exampleRequest: CoprocessorRequest = {
  version: 1,
  stage: 'RouterRequest',
  control: 'continue',
  id: '1b19c05fdafc521016df33148ad63c1b',
  headers: {
    "content-type": ["application/json"]
  },
  body: {
    query: "query GetActiveUser { me { name } }"
  },
  context: {
    entries: {
      "accepts-json": true
    }
  },
  path: "/",
  method: "POST"
};

const exampleResponse: CoprocessorResponse = {
  control: { break: 401 },
  body: {
    errors: [
      {
        message: "Not authenticated.",
        extensions: {
          code: "ERR_UNAUTHENTICATED"
        }
      }
    ]
  }
};
```

### C\#

```csharp
var exampleRequest = new CoprocessorRequest {
    Version = 1,
    Stage = Stage.RouterRequest,
    Control = Control.Continue,
    Id = "1b19c05fdafc521016df33148ad63c1b",
    Headers = new Dictionary<string, string[]> {
        { "content-type", new[] { "application/json" } }
    },
    Body = new { query = "query GetActiveUser { me { name } }" },
    Context = new Context {
        Entries = new Dictionary<string, object> {
            { "accepts-json", true }
        }
    },
    Path = "/",
    Method = "POST"
};

var exampleResponse = new CoprocessorResponse {
    Control = new Control.BreakControl(401),
    Body = new {
        errors = new[] {
            new {
                message = "Not authenticated.",
                extensions = new {
                    code = "ERR_UNAUTHENTICATED"
                }
            }
        }
    }
};
```

### Java

```java
CoprocessorRequest exampleRequest = new CoprocessorRequest();
exampleRequest.setVersion(1);
exampleRequest.setStage(Stage.RouterRequest);
exampleRequest.setControl(Control.CONTINUE);
exampleRequest.setId("1b19c05fdafc521016df33148ad63c1b");
exampleRequest.setHeaders(Map.of("content-type", new String[] { "application/json" }));
exampleRequest.setBody(Map.of("query", "query GetActiveUser { me { name } }"));
exampleRequest.setContext(new Context(Map.of("accepts-json", true)));
exampleRequest.setPath("/");
exampleRequest.setMethod("POST");

CoprocessorResponse exampleResponse = new CoprocessorResponse();
exampleResponse.setControl(new Control.BreakControl(401));
exampleResponse.setBody(Map.of("errors", new Object[] {
    Map.of("message", "Not authenticated.", "extensions", Map.of("code", "ERR_UNAUTHENTICATED"))
}));
```

### Kotlin

```kotlin
val exampleRequest = CoprocessorRequest(
    version = 1,
    stage = Stage.RouterRequest,
    control = Control.Continue,
    id = "1b19c05fdafc521016df33148ad63c1b",
    headers = mapOf("content-type" to arrayOf("application/json")),
    body = mapOf("query" to "query GetActiveUser { me { name } }"),
    context = Context(mapOf("accepts-json" to true)),
    path = "/",
    method = "POST"
)

val exampleResponse = CoprocessorResponse(
    control = Control.BreakControl(401),
    body = mapOf("errors" to listOf(mapOf("message" to "Not authenticated.", "extensions" to mapOf("code" to "ERR_UNAUTHENTICATED"))))
)
```

### Go

```go
exampleRequest := CoprocessorRequest{
    Version: 1,
    Stage: RouterRequest,
    Control: ContinueControl{},
    ID: "1b19c05fdafc521016df33148ad63c1b",
    Headers: map[string][]string{
        "content-type": {"application/json"},
    },
    Body: map[string]interface{}{
        "query": "query GetActiveUser { me { name } }",
    },
    Context: Context{
        Entries: map[string]interface{}{
            "accepts-json": true,
        },
    },
    Path:   "/",
    Method: "POST",
}

exampleResponse := CoprocessorResponse{
    Control: ControlResponse{
        Control: BreakControl{Break: 401},
    },
    Body: map[string]interface{}{
        "errors": []interface{}{
            map[string]interface{}{
                "message":    "Not authenticated.",
                "extensions": map[string]interface{}{"code": "ERR_UNAUTHENTICATED"},
            },
        },
    },
}
```

## Known Limitations

- This project provides only basic type definitions and example usages.
- The type definitions may need to be extended based on specific use cases and requirements.

## Notes

- The examples provided here are intended to be a starting point and may need adjustments to fit into specific project architectures.