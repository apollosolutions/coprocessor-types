using System;
using System.Collections.Generic;

public class CoprocessorRequest
{
    public int Version { get; set; }
    public Stage Stage { get; set; }
    public Control Control { get; set; }
    public string Id { get; set; }
    public Dictionary<string, string[]> Headers { get; set; }
    public object Body { get; set; }
    public Context Context { get; set; }
    public string Sdl { get; set; }
    public string Path { get; set; }
    public string Method { get; set; }
    public string ServiceName { get; set; }
    public int? StatusCode { get; set; }
    public string Uri { get; set; }
    public bool? HasNext { get; set; }
}

public class CoprocessorResponse
{
    public ControlResponse Control { get; set; }
    public object Body { get; set; }
    public Dictionary<string, string[]> Headers { get; set; }
    public Context Context { get; set; }
}

public enum Stage
{
    RouterRequest,
    RouterResponse,
    SupergraphRequest,
    SupergraphResponse,
    SubgraphRequest,
    SubgraphResponse
}

public abstract class Control
{
    public static Control Continue { get; } = new ContinueControl();

    public class ContinueControl : Control { }

    public class BreakControl : Control
    {
        public int Break { get; set; }

        public BreakControl(int breakCode)
        {
            Break = breakCode;
        }
    }
}

public class ControlResponse : Control { }

public class Context
{
    public Dictionary<string, object> Entries { get; set; }
}