package com.shestakam.controllers;

import com.shestakam.Calculator;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by alexandr on 11.7.15.
 */
public class Controller extends HttpServlet {

    private Calculator calculator;

    @Override
    public void init() throws ServletException {
        calculator = new Calculator();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String type = req.getParameter("type");
        if (type.equals("operationWithOperand")) {
            resp.setContentType("text/plain");
            String operation = req.getParameter("operation");
            Double operand = Double.parseDouble(req.getParameter("value"));
            calculator.setOperand(operand);
            calculator.callOperation(operation);
            resp.getWriter().write(calculator.getIndicator().toString().replaceAll("\\.[0]$",""));
        }else if (type.equals("operationWithoutOperand")) {
            resp.setContentType("text/plain");
            String operation = req.getParameter("operation");
            calculator.callOperation(operation);
            resp.getWriter().write(calculator.getIndicator().toString().replaceAll("\\.[0]$",""));
        }else if (type.equals("M+")) {
            Double operand = Double.parseDouble(req.getParameter("value"));
            calculator.setOperand(operand);
            calculator.memoryAdd();
            resp.getWriter().write(calculator.getIndicator().toString().replaceAll("\\.[0]$",""));
        } else if (type.equals("MC")) {
            calculator.memoryClear();
            resp.getWriter().write(calculator.getIndicator().toString().replaceAll("\\.[0]$",""));
        } else if (type.equals("MR")) {
            calculator.memoryRead();
            resp.getWriter().write(calculator.getIndicator().toString().replaceAll("\\.[0]$",""));
        } else if (type.equals("MS")) {
            Double operand = Double.parseDouble(req.getParameter("value"));
            calculator.setOperand(operand);
            calculator.memoryStore();
            resp.getWriter().write(calculator.getIndicator().toString().replaceAll("\\.[0]$",""));
        } else if (type.equals("CE")) {
            if (calculator.memoryIsEmpty()) {
                calculator = new Calculator();
                resp.getWriter().write("0");
            }else {
                Number temp = calculator.memoryRead();
                calculator = new Calculator();
                calculator.setOperand(temp);
                calculator.memoryStore();
                resp.getWriter().write("");
            }
        }
    }
}
