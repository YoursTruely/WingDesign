

function Calculate(){
    const v_max = parseFloat(document.getElementById("maxSpeed").value);
    const rho = 1025;

    const l = parseFloat(document.getElementById("span").value);
    const b = parseFloat(document.getElementById("chord").value);

    let ar = l/b;

    let kp = 1.173*ar+0.244;
    let stall_angle = 1000*(0.0626*Math.pow(ar,6)-0.5163*Math.pow(ar,5)+1.6871*Math.pow(ar,4)-2.7613*Math.pow(ar,3)+2.3583*Math.pow(ar,2)-1.0054*ar+0.203)*Math.PI/180;

    let C_L = Math.sin(stall_angle)*Math.cos(stall_angle)*(kp*Math.cos(stall_angle)+Math.PI*Math.sin(stall_angle));

    let F_L = Number.parseFloat(C_L * 0.5 * rho * l * b * Math.pow(v_max,2)).toFixed(2);

    let T = Number.parseFloat(F_L * 0.05 * b).toFixed(2);

    document.getElementById("Force").innerHTML = F_L + " N";
    document.getElementById("stall").innerHTML = Number.parseFloat(stall_angle * 180/Math.PI).toFixed(2) + " deg";
    document.getElementById("axis").innerHTML = Number.parseFloat(0.35 * b).toFixed(3) + " m from leading edge";
    document.getElementById("Torque").innerHTML = T + " N.m when axis located at optimum location";
}

function resetData(){
    document.getElementById("Force").innerHTML = null;
    document.getElementById("stall").innerHTML = null;
    document.getElementById("axis").innerHTML = null;
    document.getElementById("Torque").innerHTML = null;
}

