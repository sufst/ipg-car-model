#INFOFILE1.1 (UTF-8) - Do not remove this line!
FileIdent = CarMaker-TestSeries 12
FileCreator = CarMaker 12.0.1
Description:
LastChange = 2024-02-10 10:41:41 habro
StartTime = 2024-02-10 10:40:35
EndTime = 2024-02-10 10:40:44
ReportTemplate =
Step.0 = Settings
Step.0.Name = Global Settings
Step.1 = TestRun
Step.1.Name = FSUK_75m_Acceleration
Step.1.Param.0 = Driver_Wt NValue
Step.1.Char.0.Name = Throttle changes to 80%
Step.1.Char.0.Description:
Step.1.Char.0.Identifier = Time
Step.1.Char.0.Unit =
Step.1.Char.0.Param.0 = RTexpr {Vhcl.Distance >= 10 ? DM.Gas = 0.8}
Step.1.Char.0.Param.1 = RTexpr {first() ? Qu::AccTime=0}
Step.1.Char.0.Param.2 = RTexpr {first(Car.Road.sRoad>=75) ? AccTime = DM.Lap.Time}
Step.1.Crit.0.Name = Acceleration Time
Step.1.Crit.0.Description:
Step.1.Crit.0.Good = [get AccTime] <= 6.55
Step.1.Crit.0.Warn = [get AccTime] > 6.55 && [get AccTime] <= 6.65
Step.1.Crit.0.Bad = [get AccTime] > 6.65
Step.1.Diag.0.Name = Longitudinal Acceleration vs Time
Step.1.Diag.0.Type = Line Diagram
Step.1.Diag.0.Mode = Quantity vs Time
Step.1.Diag.0.VarOpt = 1
Step.1.Diag.0.Grid = None
Step.1.Diag.0.NAxes = 1
Step.1.Diag.0.RefFile =
Step.1.Diag.0.Pic = SimOutput/Hayleys_Laptop/20240208/diagrams/FSUK_75m_Acceleration_191934_2-10.png
Step.1.Diag.0.Param1.0 = Auto {} {} Time
Step.1.Diag.0.Param1.1 = Auto {} {} LongAcc
Step.1.Diag.0.Param2.0 = Time {} {} {}
Step.1.Diag.0.Param2.1 = Car.ax {} {} {}
Step.1.Diag.0.Param3.0 = {} {} {} {}
Step.1.Diag.0.Param3.1 = {} {} {} {}
Step.1.Diag.0.Param3.2 = {} {} {} {}
Step.1.Var.0.Name = Variation 0
Step.1.Var.0.Param = 70
Step.1.Var.0.Result = err
Step.1.Var.0.ResDate = 1707561637
Step.1.Var.0.Log.0.Time = 0.000
Step.1.Var.0.Log.0.Kind = err
Step.1.Var.0.Log.0.Text = Simulation ended with errors
Step.1.Var.0.Char.0.Ref = Time
Step.1.Var.0.Char.0.Value = 0.0
Step.1.Var.0.Crit.0.Ref = Acceleration Time
Step.1.Var.0.Crit.0.Result = good
Step.1.Var.1.Name = Variation 1
Step.1.Var.1.Param = 85
Step.1.Var.1.Result = err
Step.1.Var.1.ResDate = 1707561638
Step.1.Var.1.Log.0.Time = 0.000
Step.1.Var.1.Log.0.Kind = err
Step.1.Var.1.Log.0.Text = Simulation ended with errors
Step.1.Var.1.Char.0.Ref = Time
Step.1.Var.1.Char.0.Value = 0.0
Step.1.Var.1.Crit.0.Ref = Acceleration Time
Step.1.Var.1.Crit.0.Result = good
Step.1.Var.2.Name = Variation 2
Step.1.Var.2.Param = 100
Step.1.Var.2.Result = err
Step.1.Var.2.ResDate = 1707561640
Step.1.Var.2.Log.0.Time = 0.000
Step.1.Var.2.Log.0.Kind = err
Step.1.Var.2.Log.0.Text = Simulation ended with errors
Step.1.Var.2.Char.0.Ref = Time
Step.1.Var.2.Char.0.Value = 0.0
Step.1.Var.2.Crit.0.Ref = Acceleration Time
Step.1.Var.2.Crit.0.Result = good
