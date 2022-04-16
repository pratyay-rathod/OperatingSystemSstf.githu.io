

$(document).ready(function () {

    let process = [];

    $(".processvalues").fadeOut();

    $("#tableOutput").fadeOut();

    $("#array").click(function (e) {

        $(".processvalues").fadeIn();

        e.preventDefault();
        // alert("button for array is cliked");


        let inputText = $("#inputArray").val();

        if (inputText == "") {
            $("#warning").html("YOU HAVE ENTERED 0 SEEK'S ( PLEASE ENTER YOUR PROCESS VALUES )")
        }

        console.log(inputText);

        process.push(inputText);

        let output = "";

        for (let i = 0; i < process.length; i++) {

            output += '<tr><td>' + process[i] + '</td></tr>';

        }

        $("#values").html(output);

        console.log(output);
        console.log(process);

        document.getElementById("inputArray").value = " ";

        const n = process.length;

        sstf(process, n)
    })

    function sstf(process, n) {


        // console.log(counter);

        $("#submit").click(function (e) {



            e.preventDefault();

            $("#tableOutput").fadeIn();

            $(".processvalues").fadeIn();

            console.log("Hello welcome to the os project");

            shortestSeekTimeFirst(process, 50, n);

            function calculatedifference(process, head, diff, n) {
                for (let i = 0; i < n; i++) {
                    var x = head - process[i];
                    diff[i][0] = Math.abs(x);
                }
            }
            function findmin(diff, n) {
                let index = -1;

                let minimum = 1e9;

                for (let i = 0; i < n; i++) {
                    if (!diff[i][1] && minimum > diff[i][0]) {
                        minimum = diff[i][0];
                        index = i;
                    }
                }

                return index;
            }
            function shortestSeekTimeFirst(process, head, n) {
                if (n == 0) {
                    return;
                }

                const m = 8;

                const f = 2;

                let diff = new Array(m); // create an empty array of length n

                for (var i = 0; i < m; i++) {

                    diff[i] = new Array(f); // make each element an array

                }

                let seekcount = 0;

                let seeksequence = [0];

                for (let i = 0; i < n; i++) {
                    seeksequence[i] = head;

                    calculatedifference(process, head, diff, n);

                    let index = findmin(diff, n);

                    diff[index][1] = 1;

                    seekcount += diff[index][0];

                    head = process[index];
                }

                seeksequence[n] = head;

                $("#displayseekcount").html("The total number of seek operation");

                $("#display").html(seekcount);

                $("#seekcount").css({ "background-color": "rgb(245, 194, 176)", "height": "auto", "width": "auto", "padding": "10px", "border-radius": "10px", "border": "2px solid rgb(42, 174, 214)" })

                let output = "";

                for (let i = 0; i <= n; i++) {

                    output += '<tr><td>' + seeksequence[i] + '</td></tr>';
                }

                $("#datap").html(output);

            }
        })

    }
})
