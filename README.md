# Coprocessor Request/Response Type Definitions

This repository provides examples of type definitions for the coprocessor request/response lifecycle in various programming languages, including TypeScript, C#, Java, Kotlin, Go, etc.

**The code in this repository is experimental and has been provided for reference purposes only. Community feedback is welcome but this project may not be supported in the same way that repositories in the official [Apollo GraphQL GitHub organization](https://github.com/apollographql) are. If you need help you can file an issue on this repository, [contact Apollo](https://www.apollographql.com/contact-sales) to talk to an expert, or create a ticket directly in Apollo Studio.**

## Installation

To use the provided type definitions, you need to copy the respective code snippets into your project's codebase. Each language-specific example is self-contained and can be directly integrated into your project.

### TypeScript / c\# / Java / Kotlin / Go

```bash
# No installation required, just copy the code snippet from the language folder into your project. Then use as the example provided.
```

## Usage

### TypeScript

```typescript
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
CoprocessorResponse exampleResponse = new CoprocessorResponse();
exampleResponse.setControl(new Control.BreakControl(401));
exampleResponse.setBody(Map.of("errors", new Object[] {
    Map.of("message", "Not authenticated.", "extensions", Map.of("code", "ERR_UNAUTHENTICATED"))
}));
```

### Kotlin

```kotlin
val exampleResponse = CoprocessorResponse(
    control = Control.BreakControl(401),
    body = mapOf("errors" to listOf(mapOf("message" to "Not authenticated.", "extensions" to mapOf("code" to "ERR_UNAUTHENTICATED"))))
)
```

### Go

```go
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
