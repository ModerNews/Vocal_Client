inputPass.onkeydown = inputPass.onkeyup = inputPass.onkeypress = inputPass.onpaste = validatepass;
var maxLen = 0.4;
var minLen = 0.0;
var passScore = 0;

function validatepass(e) {
    pass = e.target.value;
    if (pass != null) {
        passScore = 0;
        if (/.+/g.test(pass) == true) passScore += 20;
        if (/\d+/g.test(pass) == true) passScore += 20;
        if (/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/g.test(pass) == true) passScore += 20;
        if (pass.length > 8) passScore += 40;

        if (passScore <= 30) document.getElementById("ProgressBarPasswordStrength").setAttribute("class", "progress-bar bg-danger");
        else if (passScore <= 50) document.getElementById("ProgressBarPasswordStrength").setAttribute("class", "progress-bar bg-warning");
        else if (passScore <= 80) document.getElementById("ProgressBarPasswordStrength").setAttribute("class", "progress-bar bg-info");
        else document.getElementById("ProgressBarPasswordStrength").setAttribute("class", "progress-bar bg-success");
        document.getElementById("ProgressBarPasswordStrength").style.visibility = 'visible';
        document.getElementById("ProgressBarPasswordStrength").style.width = (passScore * maxLen).toString() + '%';
    } else {
        document.getElementById("ProgressBarPasswordStrength").style.visibility = 'hidden';
    }
}