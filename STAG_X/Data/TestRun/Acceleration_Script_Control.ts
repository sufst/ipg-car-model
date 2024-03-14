#INFOFILE1.1 (UTF-8) - Do not remove this line!
FileIdent = CarMaker-TestSeries 12
FileCreator = CarMaker 12.0.1
Description:
LastChange = 2024-02-09 00:10:08 habro
StartTime = 2024-02-08 20:40:02
EndTime = 2024-02-08 20:41:19
ReportTemplate =
Step.0 = Settings
Step.0.Name = Global Settings
Step.1 = Cmd
Step.1.Name = ScriptControl Commands
Step.1.Cmd:
	Driver adaptbasic 1 1
Step.2 = TestRun
Step.2.Name = FSUK_75m_Acceleration
Step.2.Param.0 = Driver_Wt NValue
Step.2.Char.0.Name = Throttle changes to 80%
Step.2.Char.0.Description:
Step.2.Char.0.Identifier = Time
Step.2.Char.0.Unit =
Step.2.Char.0.Param.0 = RTexpr {Vhcl.Distance >= 10 ? DM.Gas = 0.8}
Step.2.Char.0.Param.1 = RTexpr {first() ? Qu::AccTime=0}
Step.2.Char.0.Param.2 = RTexpr {first(Car.Road.sRoad>=75) ? AccTime = DM.Lap.Time}
Step.2.Crit.0.Name = Acceleration Time
Step.2.Crit.0.Description:
Step.2.Crit.0.Good = [get AccTime] <= 6.55
Step.2.Crit.0.Warn = [get AccTime] > 6.55 && [get AccTime] <= 6.65
Step.2.Crit.0.Bad = [get AccTime] > 6.65
Step.2.Diag.0.Name = Longitudinal Acceleration vs Time
Step.2.Diag.0.Type = Line Diagram
Step.2.Diag.0.Mode = Quantity vs Time
Step.2.Diag.0.VarOpt = 1
Step.2.Diag.0.Grid = None
Step.2.Diag.0.NAxes = 1
Step.2.Diag.0.RefFile =
Step.2.Diag.0.Pic = SimOutput/Hayleys_Laptop/20240208/diagrams/FSUK_75m_Acceleration_204118_2-8.png
Step.2.Diag.0.Param1.0 = Auto {} {} Time
Step.2.Diag.0.Param1.1 = Auto {} {} LongAcc
Step.2.Diag.0.Param2.0 = Time {} {} {}
Step.2.Diag.0.Param2.1 = Car.ax {} {} {}
Step.2.Diag.0.Param3.0 = {} {} {} {}
Step.2.Diag.0.Param3.1 = {} {} {} {}
Step.2.Diag.0.Param3.2 = {} {} {} {}
Step.2.Var.0.Name = Variation 0
Step.2.Var.0.Param = 70
Step.2.Var.0.Result = good
Step.2.Var.0.ResDate = 1707424868
Step.2.Var.0.ResFiles = SimOutput/Hayleys_Laptop/20240208/FSUK_75m_Acceleration_204107.erg
Step.2.Var.0.ManLst = 0:long0 0:long1 0:lat0 0:lat1
Step.2.Var.0.Log.0.Time = 9.084
Step.2.Var.0.Log.0.Kind = info
Step.2.Var.0.Log.0.Text = "Lap Time = 5.943 "
Step.2.Var.0.Char.0.Ref = Time
Step.2.Var.0.Char.0.Value = 9.086000000000404
Step.2.Var.0.Crit.0.Ref = Acceleration Time
Step.2.Var.0.Crit.0.Result = good
Step.2.Var.0.Diag.0.Pic =
Step.2.Var.1.Name = Variation 1
Step.2.Var.1.Param = 85
Step.2.Var.1.Result = good
Step.2.Var.1.ResDate = 1707424873
Step.2.Var.1.ResFiles = SimOutput/Hayleys_Laptop/20240208/FSUK_75m_Acceleration_204112.erg
Step.2.Var.1.ManLst = 0:long0 0:long1 0:lat0 0:lat1
Step.2.Var.1.Log.0.Time = 9.143
Step.2.Var.1.Log.0.Kind = info
Step.2.Var.1.Log.0.Text = "Lap Time = 5.999 "
Step.2.Var.1.Char.0.Ref = Time
Step.2.Var.1.Char.0.Value = 9.14500000000037
Step.2.Var.1.Crit.0.Ref = Acceleration Time
Step.2.Var.1.Crit.0.Result = good
Step.2.Var.1.Diag.0.Pic =
Step.2.Var.2.Name = Variation 2
Step.2.Var.2.Param = 100
Step.2.Var.2.Result = good
Step.2.Var.2.ResDate = 1707424879
Step.2.Var.2.ResFiles = SimOutput/Hayleys_Laptop/20240208/FSUK_75m_Acceleration_204118.erg
Step.2.Var.2.ManLst = 0:long0 0:long1 0:lat0 0:lat1
Step.2.Var.2.Log.0.Time = 9.202
Step.2.Var.2.Log.0.Kind = info
Step.2.Var.2.Log.0.Text = "Lap Time = 6.052 "
Step.2.Var.2.Char.0.Ref = Time
Step.2.Var.2.Char.0.Value = 9.204000000000338
Step.2.Var.2.Crit.0.Ref = Acceleration Time
Step.2.Var.2.Crit.0.Result = good
Step.2.Var.2.Diag.0.Pic =
