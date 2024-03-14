QuantSubscribe {Car.v}

LoadTestRun "C:/IPG/carmaker/win64-12.0.1/Data/TestRun/Examples/VehicleDynamics/Handling/Racetrack_Hockenheim"
StartSim

WaitForStatus running

WaitForCondition {$Qu(Time) > 50}

if {$Qu(Car.v) < 20} {
   StopSim
} else {
   WaitForCondition {$Qu(Time) > 100}
   StopSim
}

Log "Speed = $Qu(Car.v) Time = $Qu(Time)"