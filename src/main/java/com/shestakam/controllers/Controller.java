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
        if (type.equals("operation")) {
            resp.setContentType("text/plain");
            String operation = req.getParameter("operation");
            Double operand = Double.parseDouble(req.getParameter("value"));
            calculator.setOperand(operand);
            calculator.callOperation(operation);
            resp.getWriter().write(calculator.getIndicator().toString());
        } else if (type.equals("M+")) {
            resp.setContentType("text/plain");
            resp.getWriter().write("M+");
        } else if (type.equals("MC")) {
            resp.setContentType("text/plain");
            resp.getWriter().write("MC");
        } else if (type.equals("MR")) {
            resp.setContentType("text/plain");
            resp.getWriter().write("Mr");
        } else if (type.equals("MS")) {
            resp.setContentType("text/plain");
            resp.getWriter().write("MS");
        } else if (type.equals("CE")) {
            resp.setContentType("text/plain");
            resp.getWriter().write("CE");
        }
    }
}
