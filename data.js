/* Tijuana River Valley Recovery Team map: site data.
   Each site: id, g (layer group), n (name), url (official page), lat, lng, a (location line),
   kv (key figures: [value, label]), ov (overview), trt (Recovery Team connection), src ([label, url]).
   Positions are placed by description, approximate. */
const SRC = {
  res2012: ["SDRWQCB (2012), Resolution R9-2012-0030", "https://www.waterboards.ca.gov/sandiego/board_info/agendas/2012/Feb/item13/Resolution_R9-2012-0030_Final_1-25-2012.pdf"],
  res2015: ["SDRWQCB (2015), Resolution R9-2015-0035", "https://www.waterboards.ca.gov/sandiego/board_decisions/adopted_orders/2015/R9-2015-0035.pdf"],
  page: ["SDRWQCB (2025), Tijuana River Valley Recovery page", "https://www.waterboards.ca.gov/sandiego/water_issues/programs/tijuana_river_valley_strategy/"],
  charter: ["TRVRT (2015), Steering Committee Charter", "https://www.waterboards.ca.gov/sandiego/water_issues/programs/tijuana_river_valley_strategy/docs/steering_committee_charter.pdf"],
  plan: ["TRVRT (2015), Five-Year Action Plan", "https://www.waterboards.ca.gov/sandiego/board_info/agendas/2015/Mar/item7/Supporting_Document_6.pdf"],
  strat: ["TRVRT (2012), Recovery Strategy", "https://www.waterboards.ca.gov/sandiego/board_info/agendas/2017/Jun/item8/03_Item_8_SD3.pdf"],
  epa: ["EPA (2025), Government roles fact sheet", "https://www.epa.gov/system/files/documents/2025-01/tijuana-river-valley-water-odor-issues-multi-agency-factsheet.pdf"],
  scc: ["State Coastal Conservancy (2021), Smuggler's Gulch staff recommendation", "https://scc.ca.gov/webmaster/ftp/pdf/sccbb/2021/2105/20210527Board07_Smuggler's_Gulch.pdf"],
  ceqa: ["CEQAnet (2009), Goat Canyon trash capture and removal cleanout", "https://ceqanet.lci.ca.gov/2009098143"],
  ibwc24: ["USIBWC (2024, Oct 29), South Bay plant rehabilitation and expansion", "https://ibwc.gov/wp-content/uploads/2024/10/USIBWC-Partners-Celebrate-Launch-of-South-Bay-Plant-Rehabilitation-and-Expansion.pdf"],
  ibwc22: ["USIBWC (2022, Apr), settlement press release", "https://www.ibwc.gov/wp-content/uploads/2023/04/Press_Release_042122.pdf"],
  cdo25: ["SDRWQCB (2025), Order R9-2025-0139 notice", "https://www.waterboards.ca.gov/sandiego/board_decisions/tentative_orders/docs/r9_2025_0139/2025-08-14-notice.pdf"],
  m328: ["IBWC (2022), Minute 328", "https://www.ibwc.gov/minutes/minute-328/"],
  m333: ["IBWC (2025), Minute 333 (EPA page)", "https://www.epa.gov/sustainable-water-infrastructure/minute-no-333"],
  tsd24: ["Times of San Diego (2024, Jan 12), new Punta Bandera plant", "https://timesofsandiego.com/health/2024/01/12/mexico-breaks-ground-on-33-million-wastewater-plant-to-stop-beach-contamination/"],
  eor26: ["SDRWQCB (2026, Sep 9), Executive Officer's Report", "https://www.waterboards.ca.gov/sandiego/publications_forms/publications/docs/executive_officer_reports/2026/eor_09_09_2026.pdf"],
  arp: ["SDRWQCB (2024), Lower Tijuana River advance restoration plan", "https://www.waterboards.ca.gov/sandiego/water_issues/programs/tmdls/docs/tijuanarivervalley/2024_11_08_lower_tijuanariver_arp.pdf"]
};

const GROUPS = [
  ["focus", "Recovery Team focus area", "#1f4e79"],
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
   lat:32.5380, lng:-117.1085, a:"Canyon outlet inside Border Field State Park, just north of the border.",
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
  {id:"sbiwtp", g:"sewer", n:"South Bay International Wastewater Treatment Plant", url:"https://www.ibwc.gov/",
   lat:32.5422, lng:-117.0615, a:"Dairy Mart Road at the border, San Diego. Run by the U.S. Section of the IBWC.",
   kv:[["25 → 50 MGD","Expansion (75 MGD peak)"],["$600M","Estimated project cost"]],
   ov:"The federal plant that treats Tijuana sewage diverted across the border. The 2024 rehabilitation and expansion would double average capacity from 25 to 50 million gallons per day. A 2025 Water Board order let it treat up to 35 MGD in the meantime.",
   trt:"Sewage sits outside the Recovery Team's scope, so this plant shows the gap your paper describes. Several agencies at the TRVRT table, including the Water Board, sued the USIBWC over cross-border flows, settling in April 2022. Minutes 328 and 333 set the binational fixes.",
   src:["ibwc24","cdo25","ibwc22","m328","m333"]},
  {id:"sab", g:"sewer", n:"San Antonio de los Buenos plant (Punta Bandera, Mexico)", url:"https://timesofsandiego.com/health/2024/01/12/mexico-breaks-ground-on-33-million-wastewater-plant-to-stop-beach-contamination/",
   lat:32.4462, lng:-117.1040, a:"Pacific coast of Tijuana, about six miles south of the border.",
   kv:[["$33M","New plant (groundbreaking Jan 2024)"],["Mexico","Not a TRVRT member"]],
   ov:"The aging plant was considered one of the biggest sources of pollution reaching south San Diego County beaches, releasing millions of gallons of raw sewage into the Pacific daily. Mexico broke ground on a replacement in January 2024.",
   trt:"This is the Mexican side of the problem. Mexico is not a Recovery Team member, which is the central gap your paper names, and fixes like this one come through IBWC treaty minutes rather than the team.",
   src:["tsd24","m328","m333","charter"]},
  {id:"board", g:"gov", n:"San Diego Regional Water Quality Control Board", url:"https://www.waterboards.ca.gov/sandiego/",
   lat:32.7766, lng:-117.1500, a:"2375 Northside Drive, San Diego. Convener, chair, and regulator.",
   kv:[["2008","First workshop convened"],["$700K","Start-up funding, 2010"]],
   ov:"The Board convened the June 2008 sediment and trash workshop that led to the Recovery Team, funded it with $700,000 from the State Cleanup and Abatement Account in early 2010, and paused its TMDL in 2011 to let the team work.",
   trt:"Lead agency. The Executive Officer chairs the Steering Committee. David Gibson is still Executive Officer as of the September 2026 report. The Board endorsed the Recovery Strategy (2012) and the Five-Year Action Plan (2015) unanimously while keeping its regulatory authority.",
   src:["res2012","res2015","charter","eor26"]}
];

/* Lower Tijuana River, border to ocean, traced approximately. */
const RIVER = [[32.5432,-117.0300],[32.5455,-117.0400],[32.5490,-117.0500],[32.5520,-117.0600],[32.5532,-117.0720],[32.5528,-117.0850],[32.5535,-117.0960],[32.5552,-117.1060],[32.5570,-117.1160],[32.5560,-117.1230],[32.5540,-117.1275]];
/* U.S.-Mexico border, Pacific to east of San Ysidro, approximate. */
const BORDER = [[32.5343,-117.1245],[32.5352,-117.1050],[32.5380,-117.0800],[32.5405,-117.0550],[32.5425,-117.0350],[32.5435,-117.0250],[32.5460,-117.0000],[32.5490,-116.9700]];

const TIMELINE = [
  ["June 2008","Water Board convenes sediment and trash workshop","res2012"],
  ["2009","Board convenes the groups that form TRVRT","page"],
  ["Early 2010","$700,000 start-up from Cleanup and Abatement Account","res2012"],
  ["Nov 2011","Recovery Strategy \"Living with the Water\" completed","res2012"],
  ["Feb 8, 2012","Board endorses the strategy unanimously","res2012"],
  ["Mar 16, 2015","Five-Year Action Plan endorsed; charter adopted","res2015"],
  ["Apr 2022","Member agencies settle lawsuit against USIBWC","ibwc22"],
  ["Jun 2025","Board: cross-border flows continue largely undiminished","page"],
  ["Sep 2026","David Gibson still Executive Officer","eor26"]
];
