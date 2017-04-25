package br.com.neotech.util.infraestructure.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@ControllerAdvice
@RestController
public class GlobalExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = BaseException.class)
    public ExceptionDTO handleBaseException(BaseException ex){
        return tratamentoErro(ex);
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(value = Exception.class)
    public ExceptionDTO handleException(Exception ex){
        return tratamentoErro(ex);
    }

    private ExceptionDTO tratamentoErro(Exception ex) {
        ExceptionDTO erro = new ExceptionDTO();
        erro.setMensagem(ex.getMessage());
        erro.setPilha(getStackTrace(ex));
        return erro;
    }

    private String getStackTrace(Throwable ex) {
        StringWriter trace = new StringWriter();
        PrintWriter pw = new PrintWriter(trace);
        ex.printStackTrace(pw);
        return trace.toString();
    }

}