<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>


<%-- JSP의 주석
<%
//요청 받은 데이터 값을 받아주기
String result = request.getParameter("keyword");
%>

결과 = <%=result%>
--%>

${param.keyword} <%-- EL / JSTL --%>