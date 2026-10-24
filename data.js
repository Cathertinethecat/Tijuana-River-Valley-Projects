/* Tijuana River Valley Recovery Team map: site data.
   Each site: id, g (layer group), n (name), url (official page), lat, lng, a (location line),
   kv (key figures: [value, label]), ov (overview), trt (Recovery Team connection), src ([label, url]).
   Positions are placed by description, approximate. */
const SRC = {
  res2012: ["SDRWQCB (2012b)", "https://www.waterboards.ca.gov/sandiego/board_info/agendas/2012/Feb/item13/Resolution_R9-2012-0030_Final_1-25-2012.pdf",
    "San Diego Regional Water Quality Control Board. (2012b). <i>A resolution endorsing the Tijuana River Valley Recovery Team’s recovery strategy “Living With the Water,” dated November 2011</i> (Resolution No. R9-2012-0030)."],
  res2015: ["SDRWQCB (2015c)", "https://www.waterboards.ca.gov/sandiego/board_decisions/adopted_orders/2015/R9-2015-0035.pdf",
    "San Diego Regional Water Quality Control Board. (2015c). <i>A resolution endorsing the Tijuana River Valley Recovery Team five-year action plan, dated March 2015</i> (Resolution No. R9-2015-0035)."],
  tmdl: ["SDRWQCB (2025a)", "https://www.waterboards.ca.gov/rwqcb9/water_issues/programs/tmdls/tijuanarivervalley.html",
    "San Diego Regional Water Quality Control Board. (2025a, May 30). <i>Lower Tijuana River indicator bacteria and trash advance restoration plan</i> [Web page]."],
  page: ["SDRWQCB (2025b)", "https://www.waterboards.ca.gov/sandiego/water_issues/programs/tijuana_river_valley_strategy/",
    "San Diego Regional Water Quality Control Board. (2025b, June 23). <i>Tijuana River Valley recovery</i>."],
  bwq: ["SDRWQCB (2026b)", "https://www.waterboards.ca.gov/sandiego/water_issues/programs/tijuana_river_valley_strategy/border_water_quality/index.html",
    "San Diego Regional Water Quality Control Board. (2026b, October 6). <i>U.S.-Mexico border water quality</i>."],
  eor26: ["SDRWQCB (2026a)", "https://www.waterboards.ca.gov/sandiego/publications_forms/publications/docs/executive_officer_reports/2026/eor_09_09_2026.pdf",
    "San Diego Regional Water Quality Control Board. (2026a, September 9). <i>Executive Officer’s report</i>."],
  spill: ["SDRWQCB (2026c)", "https://www.waterboards.ca.gov/sandiego/water_issues/programs/tijuana_river_valley_strategy/sewage_issue.html",
    "San Diego Regional Water Quality Control Board. (2026c, May 27). <i>USIBWC spill events and transboundary flow events from Mexico into the San Diego Region</i>."],
  strat: ["TRVRT (2012)", "https://www.waterboards.ca.gov/sandiego/board_info/agendas/2017/Jun/item8/03_Item_8_SD3.pdf",
    "Tijuana River Valley Recovery Team. (2012). <i>Tijuana River Valley recovery strategy: Living with the water</i>. San Diego Regional Water Quality Control Board."],
  plan: ["TRVRT (2015a)", "https://www.waterboards.ca.gov/sandiego/board_info/agendas/2015/Mar/item7/Supporting_Document_6.pdf",
    "Tijuana River Valley Recovery Team. (2015a). <i>Tijuana River Valley Recovery Team five-year action plan</i> (Item No. 7, Supporting Document No. 6). San Diego Regional Water Quality Control Board."],
  charter: ["TRVRT (2015b)", "https://www.waterboards.ca.gov/sandiego/water_issues/programs/tijuana_river_valley_strategy/docs/steering_committee_charter.pdf",
    "Tijuana River Valley Recovery Team. (2015b). <i>TRVRT steering committee charter</i>. San Diego Regional Water Quality Control Board."],
  epa: ["EPA (2025)", "https://www.epa.gov/system/files/documents/2025-01/tijuana-river-valley-water-odor-issues-multi-agency-factsheet.pdf",
    "U.S. Environmental Protection Agency. (2025). <i>Tijuana River Valley water and odor issues: Government roles and partnerships</i> [Fact sheet]."],
  scc: ["California State Coastal Conservancy (2021)", "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2021/2105/20210527Board07_Smuggler's_Gulch.pdf",
    "California State Coastal Conservancy. (2021, May 27). <i>Tijuana River Valley: Smuggler’s Gulch improvements project</i> [Staff recommendation]."],
  ceqa: ["CalRecycle (2009)", "https://ceqanet.lci.ca.gov/2009098143",
    "California Department of Resources Recycling and Recovery. (2009, September 16). <i>Border Field State Park illegal disposal site: Tijuana River Valley and Estuary Goat Canyon trash capture and removal system cleanout (Phase 2)</i> [CEQA notice]. CEQAnet."],
  ibwc24: ["USIBWC (2024)", "https://ibwc.gov/wp-content/uploads/2024/10/USIBWC-Partners-Celebrate-Launch-of-South-Bay-Plant-Rehabilitation-and-Expansion.pdf",
    "International Boundary and Water Commission, United States Section. (2024, October 29). <i>USIBWC partners celebrate launch of South Bay plant rehabilitation and expansion</i> [Press release]."],
  ibwc25: ["USIBWC (2025)", "https://www.ibwc.gov/wp-content/uploads/2025/04/South-Bay-fact-sheet-Feb25-FINAL.pdf",
    "International Boundary and Water Commission, United States Section. (2025, February). <i>Addressing transboundary flows &amp; water quality activities</i> [Fact sheet]."],
  sd22: ["City of San Diego (2022)", "https://www.sandiego.gov/mayor/regional-leaders-announce-settlement-tijuana-river-valley-sewage-litigation",
    "City of San Diego. (2022, April 12). <i>Regional leaders announce settlement in Tijuana River Valley sewage litigation</i> [Press release]."],
  m328: ["IBWC (2022)", "https://www.ibwc.gov/minutes/minute-328/",
    "International Boundary and Water Commission. (2022, July 19). <i>Minute 328: Sanitation infrastructure projects in San Diego, California, and Tijuana, Baja California, for immediate implementation and for future development</i>."],
  m333: ["IBWC (2025)", "https://www.epa.gov/sustainable-water-infrastructure/minute-no-333",
    "International Boundary and Water Commission. (2025, December 15). <i>Minute No. 333: Comprehensive actions to address the border sanitation problem at San Diego, California</i>. U.S. Environmental Protection Agency."]
};

const GROUPS = [
  ["focus", "Recovery Team focus area", "#1f4e79"],
  ["canyon", "Canyons and tributaries", "#00a6b8"],
  ["clean", "Cleanup and restoration sites", "#2f7d4e"],
  ["sewer", "Sewage infrastructure", "#b3412f"],
  ["gov", "Governance", "#d4a017"]
];

const SITES = [
  {id:"estuary", g:"clean", n:"Tijuana River Estuary (National Estuarine Research Reserve)", url:"https://trnerr.org/",
   lat:32.5726, lng:-117.1229, a:"Visitor center, 301 Caspian Way, Imperial Beach. The river reaches the ocean just south of here.",
   kv:[["1 of 5","Five-Year Plan lead agencies"],["Mouth","End of the 6-mile focus reach"]],
   ov:"The estuary at the river's mouth is one of the resources the Recovery Team was formed to protect. Sediment and trash carried down the valley were degrading it, and the river here is subject to the Clean Water Act.",
   trt:"The Estuarine Reserve is a Steering Committee member and one of the lead agencies named for projects in the 2015 Five-Year Action Plan, alongside State Parks, the County, the City, and the IBWC.",
   src:["res2012","plan","charter"]},
  {id:"borderfield", g:"clean", n:"Border Field State Park", url:"https://www.parks.ca.gov/?page_id=664",
   lat:32.5345, lng:-117.1225, a:"Southwest corner of the United States, at the border fence and the Pacific.",
   kv:[["State Parks","Land manager"],["Goat Canyon","Drains into the park"]],
   ov:"California State Parks land at the border. Storm water from Tijuana carries trash, tires, and sediment into the park through Goat Canyon.",
   trt:"California State Parks is a Recovery Team member and a named project lead in the Five-Year Action Plan.",
   src:["plan","ceqa"]},
  {id:"goat", g:"clean", n:"Goat Canyon sediment basins", url:"https://ceqanet.lci.ca.gov/2009098143",
   lat:32.5385, lng:-117.0998, a:"Canyon outlet inside Border Field State Park, just north of the border.",
   kv:[["2005","Basins built"],["60,000 yd³","Material after 2008-09 storms"]],
   ov:"Sediment basins at the canyon outlet catch trash, tires, and sediment coming across from Tijuana. After the 2008-2009 winter storms they held an estimated 60,000 cubic yards, which had to be dug out, sorted, and hauled away.",
   trt:"This is the kind of trash and sediment problem the Recovery Team's strategy targets. Capturing sediment and trash close to the border is a core idea of the 2012 strategy, and those removal projects are Tier 1 in the 2015 plan.",
   src:["ceqa","strat","plan"]},
  {id:"smuggler", g:"clean", n:"Smuggler's Gulch", url:"https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2021/2105/20210527Board07_Smuggler's_Gulch.pdf",
   lat:32.5440, lng:-117.0880, a:"Tributary crossing under Monument Road, Tijuana River Valley Regional Park. Called Matadero Canyon in Mexico.",
   kv:[["$10.3M","Improvements project budget"],["2021","Coastal Conservancy approval"]],
   ov:"A small creek that flows from Tijuana across the border onto County land, carrying sewage, trash, and sediment untreated into the river. The improvements project adds a permanent sediment basin and trash booms and fixes the Monument Road culvert to cut flooding.",
   trt:"The Coastal Conservancy says this project came out of the Recovery Team's cooperation, and that the team's Five-Year Action Plan lists targeted sediment and trash removal as a Tier 1 priority.",
   src:["scc","plan"]},
  {id:"regpark", g:"clean", n:"Tijuana River Valley Regional Park", url:"https://www.sdparks.org/content/sdparks/en/park-pages/TJRiverValley.html",
   lat:32.5512, lng:-117.0820, a:"Visitor center on Monument Road, San Diego. County of San Diego parkland along the river.",
   kv:[["County","Land manager"],["Valley floor","Most of the focus reach"]],
   ov:"County of San Diego parkland covering much of the valley floor between the border and the estuary, including Smuggler's Gulch.",
   trt:"The County is a Recovery Team member and a named project lead in the Five-Year Action Plan. Since inception, TRVRT projects have been led by the City, the Army Corps of Engineers, the County, and State Parks.",
   src:["plan","page","scc"]},
  {id:"sbiwtp", g:"sewer", n:"South Bay International Wastewater Treatment Plant", url:"https://www.waterboards.ca.gov/sandiego/water_issues/programs/tijuana_river_valley_strategy/border_water_quality/index.html",
   lat:32.5422, lng:-117.0615, a:"Dairy Mart Road at the border, San Diego. Owned and operated by the U.S. Section of the IBWC.",
   kv:[["25 → 50 MGD","Expansion (75 MGD peak)"],["Mid-2031","Construction expected through"]],
   ov:"The plant treats wastewater from Tijuana's municipal system, five canyon collectors, and vacuum trucks, and discharges through the South Bay Ocean Outfall. A 10 MGD expansion began in September 2025 to treat up to 35 MGD, and a $600 million rehabilitation will double capacity from 25 to 50 MGD, with construction expected through mid-2031.",
   trt:"Sewage sits outside the Recovery Team's scope, so this plant shows the gap your paper describes. Several agencies at the TRVRT table, including the Water Board, sued the USIBWC over cross-border flows and settled in April 2022. The Board issued a cease and desist order on the plant in August 2025.",
   src:["bwq","ibwc24","ibwc25","sd22","m328"]},
  {id:"sab", g:"sewer", n:"San Antonio de los Buenos plant (Mexico)", url:"https://www.waterboards.ca.gov/sandiego/water_issues/programs/tijuana_river_valley_strategy/border_water_quality/index.html",
   lat:32.4462, lng:-117.1040, a:"Pacific coast of Tijuana, south of the border (Punta Bandera area). Operated on the Mexican side.",
   kv:[["18.26 MGD","Treatment capacity"],["43.37 MGD","Expansion under study (Minute 333)"]],
   ov:"Mexico's coastal plant, built new under Minute 328 (Project 14), with completion expected in early 2025. Minute 333 directs a binational work group to evaluate an ocean outfall, an expansion from 18.26 to 43.37 MGD, and supplementary treatment of its effluent.",
   trt:"This is the Mexican side of the problem. Mexico is not a Recovery Team member, which is the central gap your paper names, and fixes here come through IBWC treaty minutes rather than through the team.",
   src:["bwq","ibwc25","m328","m333","charter"]},
  {id:"board", g:"gov", n:"San Diego Regional Water Quality Control Board", url:"https://www.waterboards.ca.gov/sandiego/",
   lat:32.7766, lng:-117.1500, a:"2375 Northside Drive, San Diego. Convener, chair, and regulator.",
   kv:[["2008","First workshop convened"],["$700K","Start-up funding, 2010"]],
   ov:"The Board convened the June 2008 sediment and trash workshop that led to the Recovery Team, funded it with $700,000 from the State Cleanup and Abatement Account in early 2010, and paused its TMDL in 2011 to let the team work.",
   trt:"Lead agency. The Executive Officer chairs the Steering Committee. David Gibson is still Executive Officer as of the September 2026 report. The Board endorsed the Recovery Strategy (2012) and the Five-Year Action Plan (2015) unanimously while keeping its regulatory authority.",
   src:["res2012","res2015","charter","eor26"]}
];

/* Lower Tijuana River, ocean to border, traced over Google satellite imagery (Oct 2026); approximate. */
const RIVER = [[32.55406,-117.12794],[32.55688,-117.12807],[32.55888,-117.12687],[32.55797,-117.12343],[32.55877,-117.12],[32.55942,-117.1157],[32.56043,-117.11184],[32.56225,-117.11033],[32.56333,-117.10754],[32.56333,-117.10411],[32.56239,-117.10067],[32.56159,-117.09724],[32.55996,-117.0938],[32.55869,-117.09123],[32.55797,-117.08693],[32.55743,-117.08393],[32.55634,-117.08049],[32.55471,-117.07534],[32.55344,-117.07191],[32.55282,-117.06761],[32.55224,-117.06353],[32.55126,-117.05903],[32.55,-117.0543],[32.54891,-117.05138],[32.5470,-117.0460],[32.5455,-117.0400],[32.5432,-117.0300]];
/* U.S.-Mexico border, Pacific to east of San Ysidro, approximate. */
const BORDER = [[32.5343,-117.1245],[32.5352,-117.1050],[32.5380,-117.0800],[32.5405,-117.0550],[32.5425,-117.0350],[32.5435,-117.0250],[32.5460,-117.0000],[32.5490,-116.9700]];

const TIMELINE = [
  ["June 2008","Water Board convenes sediment and trash workshop","res2012"],
  ["2009","Board convenes the groups that form TRVRT","page"],
  ["Early 2010","$700,000 start-up from Cleanup and Abatement Account","res2012"],
  ["Nov 2011","Recovery Strategy \"Living with the Water\" completed","res2012"],
  ["Feb 8, 2012","Board endorses the strategy unanimously","res2012"],
  ["Mar 16, 2015","Five-Year Action Plan endorsed; charter adopted","res2015"],
  ["Apr 2022","Member agencies settle lawsuit against USIBWC","sd22"],
  ["Jun 2025","Board: cross-border flows continue largely undiminished","page"],
  ["Sep 2026","David Gibson still Executive Officer","eor26"]
];

/* Side canyons draining north from Tijuana into the valley, west to east. Each has a USIBWC canyon collector at the border.
   Goat Canyon and Smuggler's Gulch are placed from published coordinates; Canyon del Sol, Silva Drain and Stewart's Drain are approximate. */
const CANYONS = [
  {n:"Goat Canyon", mx:"Ca\u00f1\u00f3n de los Laureles", pos:"From published coordinates",
   line:[[32.5250,-117.0985],[32.5310,-117.0990],[32.5367,-117.0994],[32.5390,-117.1005],[32.5420,-117.1045],[32.5450,-117.1100]],
   proj:"S13 sediment and trash processing site; P7 partnering with Mexico on source reduction (Los Laureles Canyon); the Goat Canyon sediment basins built in 2005.",
   spill:"About 40.4 million gallons flowed through from June 17 to Sept. 16, 2024, linked to the Hollister Street pump station failure in Tijuana, and about 1.1 million more in January 2025. The Goat Canyon pump station spilled 10,000 gallons on Jan. 26, 2025, and 900 gallons on Apr. 26, 2025.",
   src:["spill","plan","strat","ceqa"]},
  {n:"Canyon del Sol", mx:"", pos:"Approximate",
   line:[[32.5300,-117.0945],[32.5372,-117.0935],[32.5410,-117.0930]],
   proj:"No Recovery Team project names this canyon directly.",
   spill:"About 41,105 gallons flowed past the Del Sol Canyon collector from June 15 to Nov. 19, 2025, from a leaking drinking water line in Mexico and a partly clogged conveyance line.",
   src:["spill"]},
  {n:"Smuggler's Gulch", mx:"Ca\u00f1\u00f3n del Matadero", pos:"From published coordinates",
   line:[[32.5280,-117.0860],[32.5340,-117.0868],[32.5378,-117.0876],[32.5448,-117.0884],[32.5500,-117.0888],[32.5575,-117.0880]],
   proj:"S8 sediment basin; S25 native plant cover on border infrastructure; the County's Smuggler's Gulch improvements project (2021).",
   spill:"The most events on the Water Board's list: about 17.7 million gallons from June 17 to Sept. 16, 2024, and about 3 million in January 2025 (both tied to the Hollister Street pump station failure); about 3.4 million in fall 2024 from excess sediment from Mexico; 120,000 gallons on Dec. 2, 2025; and 900 gallons on Mar. 13, 2026.",
   src:["spill","scc","strat"]},
  {n:"Silva Drain", mx:"", pos:"Approximate",
   line:[[32.5320,-117.0765],[32.5385,-117.0760],[32.5440,-117.0755]],
   proj:"No Recovery Team project names this drain directly.",
   spill:"About 1.7 million gallons spilled from Mar. 21 to May 21, 2025, from a ruptured line between Silva Drain and Junction Box 2; 1.61 million gallons were recovered.",
   src:["spill"]},
  {n:"Stewart's Drain", mx:"Puerta Blanca", pos:"Approximate",
   line:[[32.5365,-117.0660],[32.5390,-117.0685],[32.5395,-117.0690],[32.5450,-117.0700]],
   proj:"P8 channel improvement and trash interception in Stewart's (Puerta Blanca) Drain.",
   spill:"About 36,000 gallons on Feb. 10, 2026, from a ruptured bypass pipeline and an overflow in Mexico, and about 45,350 gallons on Mar. 14 to 15, 2026, after a Mexican pump station outage exceeded the collector's capacity.",
   src:["spill","plan"]}
];
