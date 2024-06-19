data class CoprocessorRequest(
    val version: Int,
    val stage: Stage,
    val control: Control,
    val id: String,
    val headers: Map<String, Array<String>>? = null,
    val body: Any? = null,
    val context: Context? = null,
    val sdl: String? = null,
    val path: String? = null,
    val method: String? = null,
    val serviceName: String? = null,
    val statusCode: Int? = null,
    val uri: String? = null,
    val hasNext: Boolean? = null
)

data class CoprocessorResponse(
    val control: ControlResponse,
    val body: Any? = null,
    val headers: Map<String, Array<String>>? = null,
    val context: Context? = null
)

enum class Stage {
    RouterRequest,
    RouterResponse,
    SupergraphRequest,
    SupergraphResponse,
    SubgraphRequest,
    SubgraphResponse
}

sealed class Control {
    object Continue : Control()

    data class BreakControl(val breakCode: Int) : Control()
}

sealed class ControlResponse : Control()

data class Context(
    val entries: Map<String, Any>
)