// Type definitions pulled from the following link: https://www.apollographql.com/docs/router/customizations/coprocessor#property-reference
interface Coprocessor {
    id: string;
    version: number;
    stage: RouterStage;
    headers?: Record<string, string[]>;
    body?: string | object;
    context?: RouterContext;
    sdl?: string;
    path?: string;
    method?: string;
    serviceName?: string;
    statusCode?: number;
    uri?: string;
    hasNext?: boolean;
    query_plan?: object; // https://www.apollographql.com/docs/router/customizations/coprocessor#query_plan
}

interface CoprocessorRequest extends Coprocessor {
    control: 'continue';
}

interface CoprocessorControlBreak {
    break: number;
}

type CoprocessorControl = 'continue' | CoprocessorControlBreak;

interface CoprocessorResponse extends Coprocessor {
    control: CoprocessorControl;
}

enum RouterStage {
    RouterRequest = 'RouterRequest',
    RouterResponse = 'RouterResponse',
    SupergraphRequest = 'SupergraphRequest',
    SupergraphResponse = 'SupergraphResponse',
    ExecutionRequest = 'ExecutionRequest',
    ExecutionResponse = 'ExecutionResponse',
    SubgraphRequest = 'SubgraphRequest',
    SubgraphResponse = 'SubgraphResponse'
}

type RouterControl = 'continue' | RouterControlBreak;

interface RouterControlBreak {
    break: number;
}

interface RouterContext {
    entries: Record<string, any>;
}

// Example usage:
const exampleRequest: CoprocessorRequest = {
    version: 1,
    stage: RouterStage.RouterRequest,
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

// exampleRequest will be used here to fill out the necessary values to send back to the router
const exampleResponse: CoprocessorResponse = {
    ...exampleRequest,
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
