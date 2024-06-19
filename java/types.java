import java.util.Map;

interface CoprocessorRequest {
    int version;
    RouterStage stage;
    types control;
    String id;
    Map<String, String[]> headers;
    Object body;
    Context context;
    String sdl;
    String path;
    String method;
    String serviceName;
    Integer statusCode;
    String uri;
    Boolean hasNext;
}

interface CoprocessorResponse {
    ControlResponse control;
    Object body;
    Map<String, String[]> headers;
    Context context;
}

public enum RouterStage {
    RouterRequest,
    RouterResponse,
    SupergraphRequest,
    SupergraphResponse,
    SubgraphRequest,
    SubgraphResponse
}