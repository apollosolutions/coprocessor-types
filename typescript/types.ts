interface CoprocessorRequest {
  version: number;
  stage: Stage;
  control: 'continue';
  id: string;
  headers?: Record<string, string[]>;
  body?: string | object;
  context?: Context;
  sdl?: string;
  path?: string;
  method?: string;
  serviceName?: string;
  statusCode?: number;
  uri?: string;
  hasNext?: boolean;
}

interface CoprocessorResponse extends CoprocessorRequest {
  control: Control;
}

type Stage = 
  | 'RouterRequest'
  | 'RouterResponse'
  | 'SupergraphRequest'
  | 'SupergraphResponse'
  | 'SubgraphRequest'
  | 'SubgraphResponse';

type Control = 'continue' | BreakControl;

interface BreakControl {
  break: number;
}

interface Context {
  entries: Record<string, any>;
}

// Example usage:
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
