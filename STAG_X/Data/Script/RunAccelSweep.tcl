QuantSubscribe {Vhcl.Distance lapTime}

LoadTestRun "FSUK_75m_Acceleration"

NamedValue set Driver_Wt 70
Log "Driver Weight is set to [NamedValue get Driver_Wt]"

#Driver adaptbasic 1 1
#Driver adaptracedriver 0.75

StartSim

WaitForStatus idle

Log "LapTime = %.3f" $Qu(lapTime) 
Log "Distance = %.3f" $Qu(Vhcl.Distance)

#StopSim

NamedValue set Driver_Wt 85
Log "Driver Weight is set to [NamedValue get Driver_Wt]"

WaitForStatus idle

Driver adaptbasic 1 1
Driver adaptracedriver 0.2

StartSim

WaitForStatus idle

Log "LapTime = %.3f" $Qu(lapTime) 
Log "Distance = %.3f" $Qu(Vhcl.Distance)

StopSim
