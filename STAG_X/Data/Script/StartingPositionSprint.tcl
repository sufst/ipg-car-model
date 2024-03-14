#Get nose position from outer skin
set nosePos [lindex [IFileRead Vehicle Vehicle.OuterSkin] 3]

# 0.3 m is the staging distance from the start line
# 3.95 m is the distance from start line/trigger to back of car / lane section 
set refPos [expr {3.95 - $nosePos - 0.3}]

NamedValue set Start_Position $refPos

SessionLogMsg $refPos
