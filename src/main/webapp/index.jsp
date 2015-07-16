<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Html calculator</title>
    <link href="styles/table.css" rel="stylesheet">
    <script type="text/javascript" src="javascript/jquery-2.1.4.js"></script>
    <script type="text/javascript" src="javascript/calculator.js"></script>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js"></script>

</head>
<body>

<div id="el">
    <form name="calc" method="get" >
        <table>
            <tr>
                <td colspan="5">
                    Калькулятор
                </td>
            </tr>
            <tr>
                <td colspan="5">
                    <input class="entryField" style='text-align: Right' value="0"/>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input id="backspace" value=" Backspace" type="button"/>
                </td>
                <td>
                    <input id="C" value="C" type="reset"/>
                </td>
                <td>
                    <input id="CE" value="CE" type="button"/>
                </td>
                <td colspan="2">
                    <input class="operation" value="=" type="button" size="100%"/>
                </td>
            </tr>
            <tr>
                <td>
                    <input class="number" value="7" type="button"/>
                </td>
                <td>
                    <input class="number" value="8" type="button"/>
                </td>
                <td>
                    <input class="number" value="9" type="button"/>
                </td>
                <td>
                    <input class="operation" value="/" type="button"/>
                </td>
                <td>
                    <input class="memory" value="MC" type="button"/>
                </td>
            </tr>
            <tr>
                <td>
                    <input class="number" value="4" type="button"/>
                </td>
                <td>
                    <input class="number" value="5" type="button"/>
                </td>
                <td>
                    <input class="number" value="6" type="button"/>
                </td>
                <td>
                    <input class="operation" value="*" type="button"/>
                </td>
                <td>
                    <input class="memory" value="MR" type="button"/>
                </td>
            </tr>
            <tr>
                <td>
                    <input class="number" value="1" type="button"/>
                </td>
                <td>
                    <input class="number" value="2" type="button"/>
                </td>
                <td>
                    <input class="number" value="3" type="button"/>
                </td>
                <td>
                    <input class="operation" value="-" type="button"/>
                </td>
                <td>
                    <input class="memory" value="MS" type="button"/>
                </td>
            </tr>
            <tr>
                <td>
                    <input class="number" value="0" type="button"/>
                </td>
                <td>
                    <input id="plusMinus" value="+/-" type="button"/>
                </td>
                <td>
                    <input id="dot" value="." type="button"/>
                </td>
                <td>
                    <input class="operation" value="+" type="button"/>
                </td>
                <td>
                    <input class="memory" value="M+" type="button"/>
                </td>
            </tr>
        </table>
    </form>
</div>

</body>
</html>