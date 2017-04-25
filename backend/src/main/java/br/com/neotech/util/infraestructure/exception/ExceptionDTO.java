package br.com.neotech.util.infraestructure.exception;

/**
 * Classe representativa de erro enviada ao frontend.
 * @author Anderson Junqueira, acosorio@stefanini.com
 * @see <a href="https://httpstatuses.com/">https://httpstatuses.com/</a>
 * @since 1.0.0
 */
public class ExceptionDTO {

    private String mensagem;
    private String debug;
    private String pilha;

    /**
     * Recupera a mensagem amigável a ser apresentada ao usuário.
     * @return um texto representativo do problema ocorrido.
     */
    public String getMensagem() {
        return mensagem;
    }

    /**
     * Define a mensagem amigável a ser apresentada ao usuário.
     * @param mensagem um texto representativo do problema ocorrido.
     */
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    /**
     * Recupera uma mensagem com foco no desenvolvedor. Essa não deve ser apresentada ao usuário, porém, é aconselhado
     * que seja apresentada nos logs do sistema.
     * @return mensagem técnica explicativa do problema.
     */
    public String getDebug() {
        return debug;
    }

    /**
     * Define uma mensagem com foco no desenvolvedor.
     * @param debug técnica explicativa do problema.
     */
    public void setDebug(String debug) {
        this.debug = debug;
    }

    /**
     * Recupera a pilha de execução (Stack Trace) da exceção.
     * @return a representação textual da pilha de execução.
     */
    public String getPilha() {
        return pilha;
    }

    /**
     * Informa a pilha de execução (Stack Trace) da exeção que será encaminhada ao frontend.
     * @param pilha a representação textual da pilha de execução.
     */
    public void setPilha(String pilha) {
        this.pilha = pilha;
    }

}
