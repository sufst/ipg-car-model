QuantSubscribe {Vhcl.Distance lapTime}

for 
{set i 1} {$i <= 3} {incr i} {

    LoadTestRun "FSUK_75m_Acceleration"

    set a [expr {$i * 0.1}]
    NamedValue set Eff $a
    Log "Efficiency is set to %.1f" [NamedValue get Eff]

    Driver adaptbasic 1 1
    Driver adaptracedriver 0.75

    StartSim

    WaitForStatus running
    WaitForStatus idle

    Log "Lap Time = %.3f" $Qu(lapTime) 
    Log "Distance = %.3f" $Qu(Vhcl.Distance)

}