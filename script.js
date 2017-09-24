
 require({
        
            paths: {
                "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min",
                "jqueryui": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min",        
            }
        }, ["require", "jquery", "jqueryui"], 
        function (req, $) {
            
    //Variable for JSON Data

var myList = 
[ {
  "RowID" : "Row0",
  "Model name" : "Duarte_Fitting Distribution To Microbial Counts",
  "Model id" : "Duarte_R",
  "Environment" : "lab experiment",
  "Model creator" : "Duarte, A",
  "Model family name" : "S",
  "Model contact" : "R.; Filter, M...",
  "Software" : "R",
  "Model reference description" : "\"Fitting a distribution to microbial counts: making sense of zeroes\"       Duarte, A.S.R.; Stockmarr, A.; Nauta, M.J., 2014       asrd@food.dtu.dk   ",
  "Created date" : "11.08.2016",
  "Modified date" : "11.08.2016",
  "Rights" : "Public",
  "Notes" : "This method fits a zero-inflated Poisson lognormal distribution to in silico generated bacterial plate counts. It assumes a protocol with four 10-fold serial dilution steps, 3 replicates per dilution. Note that own input data can be used in place of simulated counts. In that case, parameters need to be adapted to the data collection protocol used.",
  "Curation status" : "false",
  "Subject" : "unknown",
  "Dependent variable" : "expected.temp",
  "Dependent variable unit" : "log10(CFU)",
  "Dependent variable type" : "numeric",
  "Independent variables" : "mu.init||sd.init||mu.start||sd.start",
  "Independent variable units" : "log10(CFU)||log10(CFU)||log10(CFU)||log10(CFU)",
  "Independent variable types" : "integer||integer||||",
  "Independent variable mins" : "0.0||0.0||0.0||0.0",
  "Independent variable maxs" : "1.0E7||1.0E7||1.0E7||1000000.0",
  "Independent variable values" : "1.0||1.0||null||null",
  "Has data?" : "false"
}, {
  "RowID" : "Row1",
  "Model name" : "terere",
  "Software" : "R",
  "Curation status" : "false",
  "Subject" : "unknown",
  "Dependent variable type" : "numeric",
  "Has data?" : "false"
}, {
  "RowID" : "Row2",
  "Model name" : "ESBL Ecoli in Broiler",
  "Model id" : "horizontal_transmi_animals_R",
  "Organism" : "Escherichia coli o157:h7 || Broiler ",
  "Environment" : "Broiler",
  "Model creator" : "Carolina Plaza-Rodríguez, Guido Correia Carreira",
  "Software" : "R",
  "Model reference description" : "C. Plaza-Rodríguez, H. Sharp, U. Roesler, A. Friese, A. Kaesbohrer (2015), Development of a model for the spread of ESBL/AmpC E.coli in broiler production. Poster presented at the National Symposium on zoonosis Research, Berlin, Germany",
  "Created date" : "11.18.2015",
  "Modified date" : "06.09.2016",
  "Rights" : "Public",
  "Notes" : "This module calculates how the prevalence among animals within one flock changes due to horizontal transmission of ESBL E.Coli on a given stage of the production (hatchery, transports or broiler farm) of the modelled production chain. The impact of horizontal transmission on the prevalence among animals in one flock is modelled by a logistic growth model.",
  "Curation status" : "false",
  "Subject" : "unknown",
  "Dependent variable" : "Prevalence",
  "Dependent variable unit" : "% (percent)",
  "Dependent variable type" : "numeric",
  "Dependent variable min" : "0.0",
  "Dependent variable max" : "100.0",
  "Independent variables" : "n.iter||K||nanim||r||t||n_i0",
  "Independent variable units" : "[] (no name)||[] (no name)||[] (no name)||[] (no name)||d (day)||[] (no name)",
  "Independent variable types" : "integer||integer||integer||numeric||numeric||array",
  "Independent variable mins" : "1.0||0.0||1.0||0.0||0.0||0.0",
  "Independent variable maxs" : "1.0E8||1.0||1.0E8||1.0E7||1.0E7||1.0E10",
  "Independent variable values" : "200.0||1.0||100.0||0.15||0.29||c(1.935721,12.71271,15.66345,1.353314,10.52182,4.736094,7.912544,12.07932,23.1919,18.89457,10.68439,13.02975,25.5023,28.58746,5.889829,26.90452,8.160216,15.8312,8.593648,34.16895,14.51137,32.84028,29.81554,20.34258,21.97171,12.73988,16.64313,13.35931,28.92521,10.55415,10.55013,16.73892,3.190878,19.87838,23.52362,23.20137,15.9757,14.40701,5.014327,4.756479,33.79569,9.373871,4.414774,12.71426,10.6548,14.75995,24.47719,4.087681,2.664281,3.23267,14.24919,20.5345,12.81333,6.883457,33.2732,3.448148,1.014574,33.39331,16.86773,10.64093,21.02841,11.52639,7.24205,38.73768,21.66689,17.25998,8.995757,23.70676,19.82166,34.74927,0.4641947,23.42121,37.14702,21.1278,0.301414,1.223592,6.068193,2.138808,4.205278,15.78051,12.40829,32.38933,28.7909,9.204453,7.138595,20.03624,4.676341,23.22836,8.515107,4.684093,11.3288,27.98973,23.75414,10.02352,21.41725,12.43532,33.53659,3.230087,13.40252,1.834815,19.62866,9.226781,8.196855,31.95928,7.419424,19.23446,8.030689,3.938026,35.07843,30.94347,14.49612,2.672764,3.661242,14.39913,23.53549,3.294764,2.435465,19.73338,19.11645,13.29316,23.98349,28.61863,17.74421,28.63623,10.24255,21.20005,24.95026,20.25662,1.33805,20.01302,23.79495,3.391174,20.43567,16.1562,5.661879,4.986108,1.937331,4.927734,2.645487,27.0641,7.504319,11.04624,16.05923,7.200019,19.93042,14.99434,28.06279,27.52094,0.9374664,1.865803,18.54756,5.507266,4.31251,1.145738,18.37622,17.39421,0.6971349,8.777291,12.53457,12.65693,9.015909,7.212545,3.530513,17.64106,19.96338,20.58375,0.6711766,13.63135,28.54139,38.56506,9.317908,25.75435,35.44397,11.43356,20.11247,8.069184,23.59772,33.51359,9.640212,17.00974,6.803223,37.73145,17.82324,3.143243,3.375974,9.321126,0.6598426,11.71911,0.501711,33.17894,15.3795,7.254196,3.670056,1.058177,37.2422,14.28571,10.2786,50.55711,9.337731,2.425376)",
  "Has data?" : "false"
}, {
  "RowID" : "Row3",
  "Model name" : "ESBL Ecoli in Broiler",
  "Model id" : "initialize_parents_animals_R",
  "Organism" : "Escherichia coli o157:h7 || Broiler ",
  "Environment" : "Broiler",
  "Model creator" : "Carolina Plaza-Rodríguez, Guido Correia Carreira",
  "Software" : "R",
  "Model reference description" : "C. Plaza-Rodríguez, H. Sharp, U. Roesler, A. Friese, A. Kaesbohrer (2015), Development of a model for the spread of ESBL/AmpC E.coli in broiler production. Poster presented at the National Symposium on zoonosis Research, Berlin, Germany",
  "Created date" : "11.18.2015",
  "Modified date" : "06.09.2016",
  "Rights" : "Public",
  "Notes" : "This module initializes the prevalence of ESBL E.Coli among animals in a parent flock. Initialization is beeing done by drawing a random sample (with a sample size of n.iter) with values between 0 and 100 from a Beta distribution whose parameters are given by the values Npos and Ntotal (see below).",
  "Curation status" : "false",
  "Subject" : "unknown",
  "Dependent variable" : "Prevalence",
  "Dependent variable unit" : "% (percent)",
  "Dependent variable type" : "numeric",
  "Dependent variable min" : "0.0",
  "Dependent variable max" : "100.0",
  "Independent variables" : "n.iter||Npos||Ntotal",
  "Independent variable units" : "[] (no name)||[] (no name)||[] (no name)",
  "Independent variable types" : "integer||integer||integer",
  "Independent variable mins" : "1.0||1.0||1.0",
  "Independent variable maxs" : "1.0E8||1.0E8||1.0E8",
  "Independent variable values" : "200.0||20.0||100.0",
  "Has data?" : "false"
}, {
  "RowID" : "Row4",
  "Model name" : "ESBL Ecoli in Broiler",
  "Model id" : "vertical_transmi_flocks_R",
  "Organism" : "Escherichia coli o157:h7 || Broiler ",
  "Environment" : "Broiler",
  "Model creator" : "Carolina Plaza-Rodríguez, Guido Correia Carreira",
  "Software" : "R",
  "Model reference description" : "C. Plaza-Rodríguez, H. Sharp, U. Roesler, A. Friese, A. Kaesbohrer (2015), Development of a model for the spread of ESBL/AmpC E.coli in broiler production. Poster presented at the National Symposium on zoonosis Research, Berlin, Germany",
  "Created date" : "11.18.2015",
  "Modified date" : "06.09.2015",
  "Rights" : "Public",
  "Notes" : "This module calculates how the prevalence among flocks changes due to vertical transmission of ESBL E.Coli at the hatchery of the modelled production chain. The impact of vertical transmission on the prevalence among flocks is modelled by a stochastic process of drawing from a triangle distribution.",
  "Curation status" : "false",
  "Subject" : "unknown",
  "Dependent variable" : "Prevalence",
  "Dependent variable unit" : "% (percent)",
  "Dependent variable type" : "numeric",
  "Dependent variable min" : "0.0",
  "Dependent variable max" : "100.0",
  "Independent variables" : "n.iter||P_initial||minimum||maximum||most_prob",
  "Independent variable units" : "[] (no name)||[] (no name)||[] (no name)||[] (no name)||[] (no name)",
  "Independent variable types" : "integer||array||integer||integer||numeric",
  "Independent variable mins" : "1.0||0.0||-1.0||-1.0||-1.0",
  "Independent variable maxs" : "1.0E8||1.0||1.0||1.0||1.0",
  "Independent variable values" : "200.0||c(24.29226,32.44315,28.63987,27.61087,35.90206,29.18475,34.84717,26.60981,29.06753,29.45651,33.16044,35.29562,33.56181,29.38734,33.96171,29.06349,27.48622,33.08027,26.83696,38.92252,25.06865,30.39818,36.60959,25.29867,33.25119,29.75832,44.76325,31.7257,39.53015,28.40871,33.50236,31.48808,35.67147,17.55388,27.39552,25.45432,31.36639,27.23183,24.95559,28.6503,29.87282,33.49689,34.95523,38.11256,31.31948,41.09557,27.46893,26.82371,29.07147,29.28801,24.54619,34.69752,24.49597,31.63416,34.78075,31.38341,28.71665,34.62388,35.74486,32.8739,28.02367,22.68958,25.25975,28.10093,32.14246,33.07594,34.54831,20.74531,33.16665,26.11647,34.9294,30.76143,29.09411,25.38369,31.56648,29.66219,32.837,33.69792,31.14811,27.12528,35.1679,26.53046,20.24507,34.6757,25.8858,40.81333,29.7784,30.50518,34.73475,31.12135,32.90976,35.48367,36.59813,29.13287,29.83423,34.38916,24.18752,28.96413,32.15934,20.46853,28.51913,36.76781,37.38981,38.70298,29.11397,27.12911,32.75461,30.84756,28.17498,41.03805,31.56257,37.31226,21.14911,31.92131,30.48698,27.65742,26.26772,36.53719,34.29181,32.18435,31.80073,35.60067,37.82891,41.27219,34.72053,31.20296,33.5591,34.23198,26.01115,26.86774,29.94217,28.93251,33.5808,29.34229,24.90723,25.36927,36.16197,24.61895,24.63203,36.92156,30.5429,40.01533,30.17783,36.25392,32.29938,31.97442,36.89077,31.99394,34.24832,20.62629,30.3027,20.70745,29.70066,35.2849,25.91996,35.55457,35.25533,24.72788,29.59981,33.55692,29.55613,27.54104,29.95226,29.3762,38.05229,30.59077,25.4745,27.03098,33.19421,32.86066,27.65548,28.88834,31.12112,29.21728,33.29856,29.12993,34.68366,31.38541,22.90248,30.21529,34.14195,37.88302,24.87546,23.6253,26.70791,29.80079,35.40483,27.61524,28.67166,22.98074,23.91965,27.57922,24.75295,33.94859,39.08178,29.29954,37.35674,24.40575,22.20782,37.83738)||0.0||1.0||0.25",
  "Has data?" : "false"
}, {
  "RowID" : "Row5",
  "Model name" : "ESBL Ecoli in Broiler",
  "Model id" : "horizontal_transmi_flocks_R",
  "Organism" : "Escherichia coli o157:h7 || Broiler ",
  "Environment" : "Broiler",
  "Model creator" : "Carolina Plaza-Rodríguez, Guido Correia Carreira",
  "Software" : "R",
  "Model reference description" : "C. Plaza-Rodríguez, H. Sharp, U. Roesler, A. Friese, A. Kaesbohrer (2015), Development of a model for the spread of ESBL/AmpC E.coli in broiler production. Poster presented at the National Symposium on zoonosis Research, Berlin, Germany",
  "Created date" : "11.18.2015",
  "Modified date" : "06.09.2016",
  "Rights" : "Public",
  "Notes" : "This module calculates how the prevalence among flocks changes due to horizontal transmission of ESBL E.Coli between flocks on a given stage (hatchery, transports or broiler farm) of the modelled production chain. The impact of horizontal transmission on the prevalence among flocks is modelled by a generalized linear model.",
  "Curation status" : "false",
  "Subject" : "unknown",
  "Dependent variable" : "Prevalence",
  "Dependent variable unit" : "% (percent)",
  "Dependent variable type" : "numeric",
  "Dependent variable min" : "0.0",
  "Dependent variable max" : "100.0",
  "Independent variables" : "n.iter||h_same||h_prev||ho||n_f||t_f||p_pf||n_i0",
  "Independent variable units" : "[] (no name)||[] (no name)||[] (no name)||[] (no name)||[] (no name)||d (day)||[] (no name)||[] (no name)",
  "Independent variable types" : "integer||numeric||numeric||numeric||integer||numeric||numeric||array",
  "Independent variable mins" : "1.0||0.0||0.0||0.0||1.0||0.0||0.0||0.0",
  "Independent variable maxs" : "1.0E8||1.0||1.0||1.0||1.0E7||100.0||1.0||1.0",
  "Independent variable values" : "200.0||0.0062||0.7||0.1||100.0||0.29||0.7||c(20.13533,20.18208,14.64824,24.00037,24.77051,22.27986,25.39517,15.05366,10.17508,13.35199,22.12452,22.67484,13.28911,7.009042,25.84986,7.759795,18.47647,18.83664,17.58743,13.55704,11.93086,5.34843,13.76488,8.214135,15.1736,17.62031,29.4717,19.09481,17.27915,17.76378,22.52632,16.72649,26.14947,6.823643,6.701237,10.1493,15.05184,12.97573,18.8189,21.95561,7.193089,23.57109,28.2189,23.2649,19.17024,20.64555,8.829339,20.92484,23.27599,24.1471,11.57289,15.86647,15.7221,23.0617,3.931043,25.68556,25.05375,10.35879,19.56079,20.34687,6.24409,12.69776,17.66054,3.063431,14.76037,18.54085,19.31375,8.761153,11.93218,6.730912,31.71509,11.75325,1.141946,7.770602,30.07501,25.23397,24.17267,28.72469,24.79693,14.8093,19.87193,8.072654,2.924765,18.79444,19.19628,14.21841,24.13575,11.14231,23.95048,24.5611,20.95048,11.93536,16.81621,20.47042,11.66786,20.6199,6.452878,22.56183,18.24643,17.63884,5.193775,24.153,27.43118,13.74649,21.96672,11.9193,22.01244,24.64472,4.022668,6.089249,20.91747,30.97648,17.38381,12.29622,12.27896,22.32347,21.62734,13.36411,18.92174,20.24135,12.68753,10.65981,21.34372,17.15313,23.84702,13.61339,13.62944,17.20962,22.49093,10.02783,10.67894,23.07947,16.45667,15.01205,17.78071,18.65794,31.41837,18.018,19.74941,15.74405,21.71563,28.26036,15.88737,27.11026,15.50644,18.29944,15.11078,10.41599,31.10347,16.78198,14.41265,14.04983,23.05631,31.73748,10.16711,20.2555,32.59428,15.49806,17.60216,21.26766,19.83445,19.15243,23.90692,14.08382,21.12462,13.3945,23.06772,14.42595,11.01964,4.402711,17.87011,8.324741,4.469319,17.95253,16.37921,20.0536,15.59909,5.982001,13.18757,15.31358,25.43679,10.34191,9.492794,18.39629,20.39416,18.94999,32.45602,18.39077,26.52064,2.611357,9.657757,18.2024,19.38815,29.75094,7.382067,19.10389,23.94239,1.359055,13.47996,30.16983)",
  "Has data?" : "false"
}, {
  "RowID" : "Row6",
  "Model name" : "ESBL Ecoli in Broiler",
  "Model id" : "initialize_parents_flocks_R",
  "Organism" : "Escherichia coli o157:h7 || Broiler ",
  "Environment" : "Broiler",
  "Model creator" : "Carolina Plaza-Rodríguez, Guido Correia Carreira",
  "Software" : "R",
  "Model reference description" : "C. Plaza-Rodríguez, H. Sharp, U. Roesler, A. Friese, A. Kaesbohrer (2015), Development of a model for the spread of ESBL/AmpC E.coli in broiler production. Poster presented at the National Symposium on zoonosis Research, Berlin, Germany",
  "Created date" : "11.18.2015",
  "Modified date" : "06.09.2015",
  "Rights" : "Public",
  "Notes" : "This module initializes the prevalence of ESBL E.Coli among parent flocks. Initialization is beeing done by drawing a random sample (with a sample size of n.iter) with values between 0 and 100 from a Beta distribution whose parameters are given by the values Npos and Ntotal (see below).",
  "Curation status" : "false",
  "Subject" : "unknown",
  "Dependent variable" : "Prevalence",
  "Dependent variable unit" : "% (percent)",
  "Dependent variable type" : "numeric",
  "Dependent variable min" : "0.0",
  "Dependent variable max" : "100.0",
  "Independent variables" : "n.iter||Npos||Ntotal",
  "Independent variable units" : "[] (no name)||[] (no name)||[] (no name)",
  "Independent variable types" : "integer||integer||integer",
  "Independent variable mins" : "1.0||1.0||1.0",
  "Independent variable maxs" : "1.0E8||1.0E8||1.0E8",
  "Independent variable values" : "200.0||30.0||100.0",
  "Has data?" : "false"
}, {
  "RowID" : "Row7",
  "Model name" : "ESBL Ecoli in Broiler",
  "Model id" : "vertical_transmi_animals_R",
  "Organism" : "Escherichia coli o157:h7 || Broiler ",
  "Environment" : "Broiler",
  "Model creator" : "Carolina Plaza-Rodríguez, Guido Correia Carreira",
  "Software" : "R",
  "Model reference description" : "C. Plaza-Rodríguez, H. Sharp, U. Roesler, A. Friese, A. Kaesbohrer (2015), Development of a model for the spread of ESBL/AmpC E.coli in broiler production. Poster presented at the National Symposium on zoonosis Research, Berlin, Germany",
  "Created date" : "11.18.2015",
  "Modified date" : "06.09.2015",
  "Rights" : "Public",
  "Notes" : "This module calculates how the prevalence among animals in one flock changes due to vertical transmission of ESBL E.Coli at the hatchery of the modelled production chain. The impact of vertical transmission on the prevalence among animals of one flock is modelled by a stochastic process of drawing from a triangle distribution.",
  "Curation status" : "false",
  "Subject" : "unknown",
  "Dependent variable" : "Prevalence",
  "Dependent variable unit" : "% (percent)",
  "Dependent variable type" : "numeric",
  "Dependent variable min" : "0.0",
  "Dependent variable max" : "100.0",
  "Independent variables" : "n.iter||P_initial||minimum||maximum||most_prob",
  "Independent variable units" : "[] (no name)||[] (no name)||[] (no name)||[] (no name)||[] (no name)",
  "Independent variable types" : "integer||array||integer||integer||numeric",
  "Independent variable mins" : "1.0||0.0||-1.0||-1.0||-1.0",
  "Independent variable maxs" : "1.0E8||1.0||1.0||1.0||1.0",
  "Independent variable values" : "200.0||c(15.42637,22.422,19.06033,18.17992,25.62394,19.53159,24.63299,17.33543,19.42991,19.76792,23.07478,25.05273,23.44262,19.70769,23.81095,19.42641,18.07411,23.00153,17.52601,28.53047,16.05873,20.59355,26.29563,16.24747,23.15779,20.03142,34.43514,21.775,29.12744,18.86147,23.38802,21.56202,10.2502,17.99724,16.37554,21.45321,17.85876,15.96619,19.06932,20.13166,23.383,24.73392,27.74108,21.41131,18.05946,17.51488,19.43332,19.62128,15.63239,24.49344,15.59158,21.69288,24.57102,21.46842,19.12652,24.42486,14.2868,25.47548,22.8133,18.5316,14.14417,16.21549,18.59765,22.15012,22.99757,24.35454,12.63106,23.08045,16.92366,24.70979,11.87639,20.9148,19.45295,16.31739,21.63222,12.74486,19.94737,22.7797,23.56778,21.25845,17.76879,24.93295,17.26901,12.24935,24.47311,16.73211,30.40144,20.04898,20.68802,24.52813,21.23461,22.84597,25.22941,26.28471,19.48657,20.09786,24.20667,15.34162,19.34036,22.16535,12.41947,18.95638,26.4466,27.04283,28.31579,19.47017,17.77202,22.70472,20.9912,18.66102,30.6264,21.62872,26.96826,12.94146,21.95082,20.67194,18.21947,17.04959,26.22664,24.11637,22.18793,21.84239,25.33954,27.46636,24.51488,21.30734,23.44013,24.06092,16.83612,17.55188,20.19244,19.313,23.46007,19.66849,15.92665,16.30552,25.87004,15.69157,15.70221,26.59358,20.72135,29.60702,20.39942,25.95728,22.29187,21.99863,26.56412,22.01621,24.07605,12.53995,20.50937,12.60206,19.981,25.04266,16.76044,25.29613,25.01492,15.78027,19.8929,23.43813,19.85478,18.12062,20.20129,19.698,27.68263,20.76368,16.39217,17.68928,23.10565,22.80124,18.21782,19.2748,21.23441,19.55983,23.20115,19.48402,24.48052,21.47021,14.31269,20.43239,23.97756,27.51869,15.9007,14.88898,13.94618,17.41767,20.06858,25.15529,18.18363,19.08773,14.37479,15.12548,18.15303,15.80071,23.79884,28.68654,19.63131,27.01103,15.51835,13.76489)||-1.0||1.0||-0.99",
  "Has data?" : "false"
} ]

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};
//Generated HTML                          
$(document.body).append(
//Startdialog
'<div id="dialog" title="Basic dialog">'+
'<h2>RAKIP Model Repository Demonstrator</h2>'+

'<p>Welcome @RAKIP Model Repository and Web Service Demonstrator!</p>'+

'<p>Via this portal we provide online access to the RAKIP Model Repository Demonstrator and resources linked to it. There are currently 3 dedicated services you can use:</p>'+
'<ol>'+
  '<li><strong>RAKIP Model Repository Demonstrator</strong> (Browse, search and execute available models)</li>'+
  '<li><strong>Online Creation of Harmonized Models</strong> (Create FSK-ML formatted model files from your R code)</li>'+
  '<li><strong>Upload of Harmonized Models</strong> (Upload PMF-ML and FSK-ML formatted model files into the RAKIP Model Repository)</li>'+
'</ol>'+
'Please consider that this project is work in progress. So far we support R models only and there are stillmissing features.'+ 
'</div>'+
//Navigationsmenu
'</div>'+
'<div class="topnav" id="myTopnav">'+
'<h1>RAKIP Model Repository & Web Services</h1>'+

'<a id="Nav1" href="https://knime.bfrlab.de/com.knime.enterprise.server/#/RAKIP_Web_Services/3._Upload_of_Harmonized_Models&&user=RAKIP&pw=RAKIP2017!&single" target="_blank">Upload of Harmonized Model<i class="material-icons">file_upload</i></a>'+
'<a id="Nav1" href="https://knime.bfrlab.de/com.knime.enterprise.server/#/RAKIP_Web_Services/2._Online_Creation_of_Harmonized_Models&user=RAKIP&pw=RAKIP2017!&single" target="_blank">Online Creation of Harmonized Models <i class="material-icons">create</i></a>'+
'<a id="Nav2" href="https://foodrisklabs.bfr.bund.de/rakip-web-portal/" target="_blank" style="float:right">About</a>'+
'<a href="javascript:void(0);" style="font-size:36px;" class="icon" id="MenuIcon"><i  style="font-size:26px;"class="material-icons">menu</i></a>'+
'</div>'+
'<div id="mySidenav" class="sidenav">'+
'  <a href="javascript:void(0)" class="closebtn">&times;</a>'+
'<a id="Nav1" href="https://knime.bfrlab.de/com.knime.enterprise.server/#/RAKIP_Web_Services/2._Online_Creation_of_Harmonized_Models&user=RAKIP&pw=RAKIP2017!&single" target="_blank">Online Creation of Harmonized Models <i class="material-icons">create</i></a>'+
'<a id="Nav1" href="https://knime.bfrlab.de/com.knime.enterprise.server/#/RAKIP_Web_Services/3._Upload_of_Harmonized_Models&&user=RAKIP&pw=RAKIP2017!&single" target="_blank">Upload of Harmonized Model<i class="material-icons">file_upload</i></a>'+
'<a id="Nav3" href="https://foodrisklabs.bfr.bund.de/rakip-web-portal/" target="_blank" >About</a>'+
'</div>'+
//Content
'<div class="content">'+
    //Heder
    '<h1>RAKIP Model Repository Demonstrator</h1>'+
    //Small introduction
  //'<p>This workflow allows to scroll through the FSKX-file model repository. The meta data, an example of the graphical result using the default dataset and a downloadlink for the original FSKX-file are shown. If only one model is selected there is via the NEXT button an option to run the model with modified independent variable values and the result will be graphically presented as well as the possibility to download the FSKX-file including the new dataset.</p>'+


        //Table-functionalities
              '<table class="filter" id="menu">'+
              '<tr>'+
              '<td class="filter">'+
              //Searchfield
              '<div id="search"><input type="text" id="filter-search" placeholder="Search"/></div>'+
              '</td>'+
              //Filter-Button Organism
              '<td class="filter">'+
                '<button class="accordion-control"> Organism  <i class="material-icons">expand_more</i> </button>'+
                '<div class="accordion-panel">'+
                //The JS generated filters are included into the division-Element    
                  '<div id="buttons"></div>'+
                '</div>'+
              '</td>'+
              //Filter-Button Environment
              '<td class="filter">'+
                '<button  class="accordion-control">Environment <i class="material-icons">expand_more</i></button>'+
                '<div class="accordion-panel">'+
                //The JS generated filters are included into the division-Element
                  '<div id="buttons1"></div>'+
                '</div>'+
              '</td>'+
              //Filter-Button Category
              '<td class="filter">'+
                '<button class="accordion-control">Software <i class="material-icons">expand_more</i> </button>'+
                '<div class="accordion-panel">'+
                //The JS generated filters are included into the division-Element
                '<div id="buttons2"></div>'+
                '</div>'+ 
              '</td>'+
              '<td class="filter" id="Reset">'+
              //ResetButton goes here
              '</td>'+
            '</tr>'+
            
      '</table>'+	
      '<table class="sortable">'+
      //Static_Table-Head
            '<thead>'+	
              '<tr>'+
                '<th id="checkbox"> </th>'+
                 '<th id="th" data-sort="name">Model name <i class="material-icons">sort</i></th>'+
                '<th id="th" data-sort="name">Model-ID <i class="material-icons">sort</i></th>'+
                '<th id="th" data-sort="name">Organism <i class="material-icons">sort</i></th>'+
                '<th id="th" data-sort="name">Environment <i class="material-icons">sort</i></th>'+
                '<th id="th" data-sort="name">Software <i class="material-icons">sort</i></th>'+
                          '<th id="details-head">Details</th>'+
                       
              '</tr>'+
            '</thead>'+
           '<tbody id="data" class"data-table"></tbody>'+
         '</table></div>'
        
  );


//****For Loop to generate the variable HTML Code *******//

for(i=0; i< myList.length;i++){
var keys= Object.keys(myList[i])
var organism =((myList[i]['Organism']!=undefined)?myList[i]['Organism'].replaceAll("|| "+myList[i]['Environment']+""," "):"");
var organism1 =((myList[i]['Organism']!=undefined)?myList[i]['Organism'].replaceAll("|| "+myList[i]['Environment']+""," "):myList[i]['Organism']);

var contentTable ='<tr class="RowSearch" data-tags="'+organism1+'" data-tags1="'+myList[i]['Environment']+'"" data-tags2="'+myList[i]['Software']+'" >'+
'<td id="checkbox"><input type="checkbox" class="checkbox" title="Choose a model"  name="'+myList[i]['RowID']+'"></td>'+
'<td>'+((myList[i]['Model name']!=undefined)?myList[i]['Model name']:"")+'</td>'+
'<td>'+((myList[i]['Model id']!=undefined)?myList[i]['Model id']:"")+'</td>'+
'<td>'+organism+'</td>'+
'<td>'+((myList[i]['Environment']!=undefined)?myList[i]['Environment']:"")+'</td>'+
'<td>'+((myList[i]['Software']!=undefined)?myList[i]['Software']:"")+'</td>'+
//Dialog-Button
'<td id="details"><button id="opener'+i+'">Details</button>'+
'<div id="wrapper'+i+'">';
contentTable += '<table><tr><thead><th class="dialog_first_col">Feature</th> <th class="dialog_second_col">Value</th>  </tr></thead>';
for(x=0; x< keys.length;x++){
//console.log(keys[x]);
if(keys[x]=='RowID')
   continue;
else if(keys[x]=='Organism'){
  var organism =((myList[i]['Organism']!=undefined)?myList[i]['Organism'].replaceAll("|| "+myList[i]['Environment']+""," "):myList[i]['Organism']);
  contentTable += ((myList[i][keys[x]]!=undefined)?'<tr><td class="dialog_first_col">'+keys[x]+'                           </td><td class="dialog_second_col">'+organism+'</td></tr>':'')
  continue;
}
contentTable += ((myList[i][keys[x]]!=undefined)?'<tr><td class="dialog_first_col">'+keys[x]+'                           </td><td class="dialog_second_col">'+myList[i][keys[x]].replaceAll("||","<br>")+'</td></tr>':'')
}
//contentTable+='<tr><td class="dialog_first_col">Simulation</td><td class="dialog_second_col"><img style="width:100%"src="data:image/png;base64,'+knimeDataTable.getColumn(i)+'"></td></tr></td>'+
'</tr>'+
'</table>'+
'</td></tr>';
$("#data").append(contentTable);
 
       
    
}

//************************************************************JS********************************************************************************************//
//Start Dialog
$( function() {
$( "#dialog" ).dialog(
  {
    autoOpen: true,
    show: {
      effect: "blind",
      duration: 1000
    },
    title: '',
        width: 800,
        height: 400,
        position: {
                       my: 'center',
                      at: 'center', 
                     }

});
});
//******************************Navigatiomenu******************************* *//



$(document).ready(function() {
$('#MenuIcon').click(function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
 });
 $('.closebtn').click(function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
});
});

//*****************AccordionFunction*********************//

  
  $.fn.accordion = function(speed) { // Return the jQuery selection
      this.on('click', '.accordion-control', function(e) {
          e.preventDefault();
          $(this)
              .next('.accordion-panel')
              .not(':animated')
              .slideToggle(speed);
      });
      return this; 
  };

  $('#menu').accordion(500);


//**************SearchFunction*******************************//


  var $tr = $('#data tr.RowSearch');
  var $search = $('#filter-search'); // Get the input element
  var cache = []; // Create an array called cache

  $tr.each(function() {
      //console.log(getText(this));
      cache.push({ // Add an object to the cache array
          element: this, // This Content
          text: getText(this).trim().toLowerCase() // Its outerText (lowercase trimmed)
      });
  });

  function filter() { // Declare filter() function
      var query = this.value.trim().toLowerCase(); // Get the query
      cache.forEach(function(p) { // For each entry in cache pass image
          var index = 0; // Set index to 0

          if (query) { // If there is some query text
              index = p.text.indexOf(query); // Find if query text is in there
          }

          p.element.style.display = index === -1 ? 'none' : ''; // Show / hide
      });
  }
  if ('oninput' in $search[0]) { // If browser supports input event
      $search.on('input', filter); // Use input event to call filter()
  } else { // Otherwise
      $search.on('keyup', filter); // Use keyup event to call filter()
  }

// Contentelements for Searchfunction
  function getText(element) {
      var text = '';

      if (element.outerText) {
          text += element.outerText.trim() + ' ';
      }
      
      else if (element.innerText) {
          text += element.innerText.trim() + ' ';
      }

      for (var i = 0; i < element.childNodes.length; i++) {
          text += getText(element.childNodes[i]);
      }

      return text;
  }

  
//**********************************Buttons********************************************//

//*****************Reset-Button*******************//
var $tr = $('#data tr');                  // Store all images
// speichert Button Element
var $buttons = $('#buttons');                   // Store buttons element
var $Reset = $('#Reset'); 
//Array
var tagged = {};                                // Create tagged object

// Read the data for Reset and Button

$tr.each(function() {                         // Loop through images and
  var data = this;                               // Store img in variable
  var tags = $(this).data('tags');              // Get this element's tags

  if (tags) {                                   // If the element had tags
    tags.split(',').forEach(function(tagName) { // Split at comma and
      if (tagged[tagName] == null) {            // If object doesn't have tag
        tagged[tagName] = [];                   // Add empty array to object
      }
      tagged[tagName].push(data);                // Add the image to the array
    });
  }
});

$('<button/>', {                                 // Create empty button
  text: 'Reset Selection',
   
// Add text 'show all'                              // Make it active
  click: function() {                            // Add onclick handler to                                 // Get the clicked on button                        // Add the class of active
    $(this)
    
    $('button').removeClass('active')  
    $tr.show();                               
    condition ={};
    conditionType={};
  }
}).append('<i class="material-icons">refresh</i>').addClass('accordion-control').appendTo($Reset);                           // Add to buttons

//**************Button*******************//
$.each(tagged, function(tagName) {     
  // For each tag name
  
  $('<button/>', {                               // Create empty button
    text: tagName + ' (' + tagged[tagName].length + ')', // Add tag name
    click: function() {                          // Add click handler
      $(this)                                    // The button clicked on
        .addClass('active')                      // Make clicked item active
        .siblings()                              // Get its siblings
        .removeClass('active');                  // Remove active from siblings
         taggedfilter('data-tags',tagName);                              // Show just those images
    }
  }).appendTo($buttons);                         // Add to the buttons
});

condition ={};
conditionType={};
x=0;
function taggedfilter(tagType,tagName){
var filterText='';
x++;
var exist = false;
for(type in conditionType){
  if(tagType == conditionType[type]){
    
    exist = true;
  }
  
}
if(exist){
  condition[type]=tagName;
}else{
  conditionType[x]=tagType;
   condition[x]=tagName;
}

 
for(tagX in condition){
                               
        filterText += '['+conditionType[tagX]+'="'+condition[tagX]+'"]';
        // Find ones with this tag
        
}
//alert(filterText);
$tr1
        .hide()
        .filter(filterText).show();   

}



//**************************Button1*********************//



var $tr1 = $('#data tr.RowSearch');                  // Store all images
var $buttons1 = $('#buttons1');                   // Store buttons element
var tagged1 = {};                                // Create tagged object

$tr1.each(function() {                         // Loop through images and
  var data = this;                               // Store img in variable
  var tags1 = $(this).data('tags1');              // Get this element's tags

  if (tags1) {                                   // If the element had tags
    tags1.split(',').forEach(function(tagName) { // Split at comma and
      if (tagged1[tagName] == null) {            // If object doesn't have tag
        tagged1[tagName] = [];                   // Add empty array to object
      }
      tagged1[tagName].push(data);                // Add the image to the array
    });
  }
});


$.each(tagged1, function(tagName) {     
  // For each tag name
  
  $('<button/>', {                               // Create empty button
    text: tagName + ' (' + tagged1[tagName].length + ')', // Add tag name
    click: function() {                          // Add click handler
      $(this)                                    // The button clicked on
        .addClass('active')                      // Make clicked item active
        .siblings()                              // Get its siblings
        .removeClass('active');                  // Remove active from siblings
         taggedfilter('data-tags1',tagName);                              // Show just those images
    }
  }).appendTo($buttons1);                         // Add to the buttons
});

condition ={};
conditionType={};
x=0;
function taggedfilter(tagType,tagName){
var filterText='';
x++;
var exist = false;
var whereExist;
for(typeIndex in conditionType){
  if(tagType == conditionType[typeIndex]){
    
    exist = true;
    whereExist = typeIndex;
  }
  
}
if(exist){
  condition[whereExist]=tagName;
}else{
  conditionType[x]=tagType;
   condition[x]=tagName;
}

 
for(tagX in condition){
  //alert(condition[tagX]);                               // Hide them
        filterText += '['+conditionType[tagX]+'="'+condition[tagX]+'"]';
        // Find ones with this tag
        
}
//alert(filterText);
$tr1
        .hide()
        .filter(filterText).show();   

}

//***************************Buttons2************************************//

var $tr2 = $('#data tr');                  // Store all images
var $buttons2 = $('#buttons2');                   // Store buttons element
var tagged2 = {};                                // Create tagged object

$tr2.each(function() {                         // Loop through images and
  var data = this;                               // Store img in variable
  var tags2 = $(this).data('tags2');              // Get this element's tags

  if (tags2) {                                   // If the element had tags
    tags2.split(',').forEach(function(tagName) { // Split at comma and
      if (tagged2[tagName] == null) {            // If object doesn't have tag
        tagged2[tagName] = [];                   // Add empty array to object
      }
      tagged2[tagName].push(data);                // Add the image to the array
    });
  }
});

$.each(tagged2, function(tagName) {     
  // For each tag name
  
  $('<button/>', {                               // Create empty button
    text: tagName + ' (' + tagged2[tagName].length + ')', // Add tag name
    click: function() {                          // Add click handler
      $(this)                                    // The button clicked on
        .addClass('active')                      // Make clicked item active
        .siblings()                              // Get its siblings
        .removeClass('active');                  // Remove active from siblings
         taggedfilter('data-tags2',tagName);                              // Show just those images
    }
  }).appendTo($buttons2);                         // Add to the buttons
});

condition ={};
conditionType={};
x=0;
function taggedfilter(tagType,tagName){
var filterText='';

var exist = false;
var whereExist;
for(type in conditionType){
  if(tagType == conditionType[type]){
    whereExist = type;
    exist = true;
  }
  
}
if(exist){
  condition[whereExist]=tagName;
}else{
  conditionType[x]=tagType;
   condition[x]=tagName;
   x++;
}

 
for(tagX in condition){
  //alert(condition[tagX]);                               // Hide them
        filterText += '['+conditionType[tagX]+'="'+condition[tagX]+'"]';
        // Find ones with this tag
        
}
//alert(filterText);
$tr1
        .hide()
        .filter(filterText).show();   

}




//***********************Tooltip requires jQueryUI*************************//
$(function() {
  $(document).tooltip;
} );



//*******Dialog Function*******//

function builder(wrapper,opener){
 //Defines the Dialog
$('#'+wrapper).dialog({
  autoOpen: false,
  title: 'Model Details',
      width: 600,
      height: 400,
      position: {
                     my: 'center',
                     at: 'right'
                   }
     
});
//ClickButton
$('#'+opener).click(function() {
  $('#'+wrapper).dialog('open');
  return false;
});
}
//For Loop to call the function for specific Element
for(i=0;i< myList.length ;i++){
builder("wrapper"+i,"opener"+i);
}
//*******************Sort*******************//

var compare = {                           // Declare compare object
  name: function(a, b) {                  // Add a method called name
    a = a.replace(/^the /i, '');          // Remove The from start of parameter
    b = b.replace(/^the /i, '');          // Remove The from start of parameter

    if (a < b) {                          // If value a is less than value b
      return -1;                          // Return -1
    } else {                              // Otherwise
      return a > b ? 1 : 0;               // If a is greater than b return 1 OR
    }                                     // if they are the same return 0
  },
  duration: function(a, b) {              // Add a method called duration
    a = a.split(':');                     // Split the time at the colon
    b = b.split(':');                     // Split the time at the colon

    a = Number(a[0]) * 60 + Number(a[1]); // Convert the time to seconds
    b = Number(b[0]) * 60 + Number(b[1]); // Convert the time to seconds

    return a - b;                         // Return a minus b
  },
  date: function(a, b) {                  // Add a method called date
    a = new Date(a);                      // New Date object to hold the date
    b = new Date(b);                      // New Date object to hold the date

    return a - b;                         // Return a minus b
  }
};

$('.sortable').each(function() {
  var $table = $(this);                     // This sortable table
  var $tbody = $table.find('tbody');        // Store table body
  var $controls = $table.find('th');        // Store table headers
  var rows = $tbody.find('tr').toArray();   // Store array containing rows

  $controls.on('click', function() {        // When user clicks on a header
    var $header = $(this);                  // Get the header
    var order = $header.data('sort');       // Get value of data-sort attribute
    var column;                             // Declare variable called column

    // If selected item has ascending or descending class, reverse contents
    if ($header.is('.ascending') || $header.is('.descending')) {  
      $header.toggleClass('ascending descending');    // Toggle to other class
      $tbody.append(rows.reverse());                // Reverse the array
    } else {                                        // Otherwise perform a sort                            
      $header.addClass('ascending');                // Add class to header
      // Remove asc or desc from all other headers
      $header.siblings().removeClass('ascending descending'); 
      if (compare.hasOwnProperty(order)) {  // If compare object has method
        column = $controls.index(this);         // Search for columnâ€™s index no

        rows.sort(function(a, b) {               // Call sort() on rows array
          a = $(a).find('td').eq(column).text(); // Get text of column in row a
          b = $(b).find('td').eq(column).text(); // Get text of column in row b
          return compare[order](a, b);           // Call compare method
        });

        $tbody.append(rows);
      }
    }
  });
});



//********************Checkboxen*************************//

/*var selectedBox = null;

$(document).ready(function() {
  $(".checkbox").click(function() {
      selectedBox = this.name;

      $(".checkbox").each(function() {
          if ( this.name == selectedBox )
          {
              this.checked = true;
          }
          else
          {
              this.checked = false;
          };        
      });
      FLOW_VARIABLES["selectedmodel"] = selectedBox;
  });    
});*/

//**********Store choosen checkbox in Variable *******************//
/*FLOW_VARIABLES["selectedmodel"] = '[]';


var checkbox = document.querySelector("input[name=checkbox]");

$('input').change(function(){
var name = $(this).attr('name');

var list = JSON.parse(FLOW_VARIABLES["selectedmodel"]);

if($(this).is(':checked:true') {
  list.push(name);        
    } else {
      list = list.filter(function(value) {
        return value !== name;
      });    		
    }

    FLOW_VARIABLES["selectedmodel"] = JSON.stringify(list);
});*/
        });