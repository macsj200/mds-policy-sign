const samplePolicy = {
  "policies": [
    {
      "name": "LADOT Mobility Caps: Lime",
      "rules": [
        {
          "name": "SFV DACs",
          "maximum": 0,
          "rule_id": "d7dc6e5b-cefb-4392-a87d-f990c7b1a21b",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "e3ed0a0e-61d3-4887-8b6a-4af4f3769c14"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "All other DACs (scooters)",
          "maximum": 2500,
          "rule_id": "dc926dc9-62fb-45bf-8655-0651b59655ac",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "0c444869-1674-4234-b4f3-ab5685bcf0d9"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "Non-DAC",
          "maximum": 3000,
          "rule_id": "e659737d-e62d-45d6-8c71-ef302c355065",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "1f943d59-ccc9-4d91-b6e2-0c5e771cbc49"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "f09ad24a-ad0e-4fb0-8770-4fd24e06eb2c",
      "start_date": 1558389669540,
      "description": "Mobility caps as described in the One-Year Permit",
      "provider_ids": [
        "63f13c48-34ff-49d2-aca7-cf6a5b6171c3"
      ],
      "publish_date": 1566936824458,
      "prev_policies": null
    },
    {
      "name": "Prohibited Dockless Zones",
      "rules": [
        {
          "name": "Prohibited Dockless Zones",
          "maximum": 0,
          "rule_id": "8ad39dc3-005b-4348-9d61-c830c54c161b",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": []
          },
          "rule_type": "count",
          "geographies": [
            "c0591267-bb6a-4f28-a612-ff7f4a8f8b2a"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "39a653be-7180-4188-b1a6-cae33c280341",
      "start_date": 1552678594428,
      "description": "Prohibited areas for dockless vehicles within the City of Los Angeles for the LADOT Dockless On-Demand Personal Mobility Program",
      "publish_date": 1566937175621,
      "prev_policies": null
    },
    {
      "name": "LADOT Mobility Caps: Sherpa",
      "rules": [
        {
          "name": "SFV DACs",
          "maximum": 410,
          "rule_id": "56f7e527-8b91-42e9-bba3-7bc86d88f720",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "e3ed0a0e-61d3-4887-8b6a-4af4f3769c14"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "All other DACs (scooters)",
          "maximum": 0,
          "rule_id": "e1aae22e-8a2a-4f63-8133-f03cc3e770fe",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "0c444869-1674-4234-b4f3-ab5685bcf0d9"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "Non-DAC",
          "maximum": 260,
          "rule_id": "2fb022bc-8f6a-4ee3-9d67-50f57866119a",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "1f943d59-ccc9-4d91-b6e2-0c5e771cbc49"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "59f25ae6-3ec7-4642-a594-f8d2f6d97362",
      "start_date": 1558389669540,
      "description": "Mobility caps as described in the One-Year Permit",
      "provider_ids": [
        "3c95765d-4da6-41c6-b61e-1954472ec6c9"
      ],
      "publish_date": 1566937010395,
      "prev_policies": null
    },
    {
      "name": "LADOT Venice Global Caps",
      "rules": [
        {
          "name": "Greater Venice Area Global Cap",
          "maximum": 1500,
          "rule_id": "6d8f73ed-ba12-4715-af0b-1276b32b54a4",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": []
          },
          "rule_type": "count",
          "value_url": "https://api.ladot.io/compliance/count/6d8f73ed-ba12-4715-af0b-1276b32b54a4",
          "geographies": [
            "3abf8e10-a380-45bb-bfd4-ec5b21b1b0b6"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "808f7c4e-83e2-456d-9e49-655a461d393f",
      "start_date": 1562043637000,
      "description": "Global cap rule for the Venice (aggregate number of vehicles across all providers)",
      "publish_date": 1566936983327,
      "prev_policies": [
        "8c3fa8e2-e0eb-4773-a52f-7aada073da46",
        "eda761e0-ef67-4531-b5ff-504efc8bacb3",
        "7813bb2c-20a2-45a9-9913-2ea9b6d194d3"
      ]
    },
    {
      "name": "LADOT Venice Beach Special Operations Zone Global Caps",
      "rules": [
        {
          "name": "Venice Beach Special Operations Zone Global Cap",
          "maximum": 750,
          "rule_id": "81b1bc92-65b7-4434-8ada-2feeb0b7b223",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": []
          },
          "rule_type": "count",
          "value_url": "https://api.ladot.io/compliance/count/81b1bc92-65b7-4434-8ada-2feeb0b7b223",
          "geographies": [
            "e0e4a085-7a50-43e0-afa4-6792ca897c5a"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "16e3fca1-f771-440d-9f9c-713e364ffbf5",
      "start_date": 1562043637000,
      "description": "Global cap rule for Venice (aggregate number of vehicles across all providers)",
      "publish_date": 1566937098491,
      "prev_policies": [
        "8c3fa8e2-e0eb-4773-a52f-7aada073da46",
        "eda761e0-ef67-4531-b5ff-504efc8bacb3"
      ]
    },
    {
      "name": "LADOT Mobility Caps: Bird",
      "rules": [
        {
          "name": "SFV DACs",
          "maximum": 1000,
          "rule_id": "8a61de66-d9fa-4cba-a38d-5d948e2373fe",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "e3ed0a0e-61d3-4887-8b6a-4af4f3769c14"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "All other DACs",
          "maximum": 2500,
          "rule_id": "0a11a5d0-06ad-45d8-b4ba-c53f24744ff5",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "0c444869-1674-4234-b4f3-ab5685bcf0d9"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "Non-DAC",
          "maximum": 3000,
          "rule_id": "57d47e74-6aef-4f41-b0c5-79bb35aa5b9d",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "1f943d59-ccc9-4d91-b6e2-0c5e771cbc49"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "99f7a469-6e3a-4981-9313-c2f6c0bbd5ce",
      "start_date": 1558389669540,
      "description": "Mobility caps as described in the One-Year Permit",
      "provider_ids": [
        "2411d395-04f2-47c9-ab66-d09e9e3c3251"
      ],
      "publish_date": 1566852448978,
      "prev_policies": null
    },
    {
      "name": "VSOZ: Non-dropzone Caps",
      "rules": [
        {
          "name": "Valid Provider Drop Offs",
          "maximum": 0,
          "rule_id": "e0c44896-676b-483b-8c1e-a9914ef79746",
          "statuses": {
            "available": [
              "provider_drop_off"
            ]
          },
          "rule_type": "count",
          "geographies": [
            "6dc968c7-19f4-421c-b9d1-683dd3cdb632",
            "2a4fbdb9-ff76-4060-aa92-1d37e26732e8",
            "9bb19cd1-2530-4f7f-8de0-80e7326a3e32",
            "fe9c910a-7aca-4a42-9d63-e014b3c243d7",
            "7beb1d83-66e7-4654-8c6b-6710fa26d1bd",
            "c7553640-730f-4ae1-a422-68bac4b849cc",
            "e42f7e97-b5e6-4ebe-8ddc-05fc806ce54e",
            "b539054b-541a-43b3-a182-58a0bd0958fd",
            "73779ce8-e0fb-48c0-96ba-a1e7f7738279",
            "aa4dc424-09e4-48f3-8471-df5186927016",
            "f5f4a15d-447f-4969-aedb-a0e94ae5b183",
            "456c25f0-a9ce-4ff3-8610-3cee919a3539",
            "0a484e09-7a95-4e7d-86c7-a10a58268ee2",
            "06b4e69e-da53-4340-8354-5a2262034657",
            "b1fdf441-ce46-4f22-bb70-dd2e99df1001",
            "2166b7dd-10ab-4219-9921-0d8c0f082308",
            "86f9a2bd-48c8-4447-b6eb-60916da16aa1",
            "d5d889c5-b6b9-4b83-bbcb-f5209d8dbcc3",
            "5a5b5ffa-5f9f-4db8-ba09-72c5deaac41a",
            "8ce201f3-34d7-46a2-aed3-282fcb6938ac",
            "2d7f76f0-f45e-4563-8be1-280f77b1181a",
            "9912fa40-b594-492f-91d0-113a7568bb2b"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "VSOZ Non-dropzone Caps",
          "maximum": 25,
          "rule_id": "84e2b85e-7542-4bed-8854-203927ced318",
          "statuses": {
            "available": [
              "provider_drop_off"
            ]
          },
          "rule_type": "count",
          "geographies": [
            "e0e4a085-7a50-43e0-afa4-6792ca897c5a"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "64c1adb3-67df-4888-98ac-70598173cc21",
      "start_date": 1558389669540,
      "description": "LADOT Venice Special Ops Zone: Each Operator may deploy up to 25 vehicles outside of the 22 deployment zones.",
      "publish_date": 1566936669896,
      "prev_policies": [
        "dd9ace3e-14c8-461b-b5e7-1326505ff176"
      ]
    },
    {
      "name": "LADOT Mobility Caps: Jump",
      "rules": [
        {
          "name": "SFV DACs",
          "maximum": 0,
          "rule_id": "734f5974-d153-4473-8eb5-e146dd38d70b",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "e3ed0a0e-61d3-4887-8b6a-4af4f3769c14"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "All other DACs (bikes)",
          "maximum": 1250,
          "rule_id": "ccd6b299-5c58-412a-ae9d-75f1e077dc1d",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "0c444869-1674-4234-b4f3-ab5685bcf0d9"
          ],
          "vehicle_types": [
            "bicycle"
          ]
        },
        {
          "name": "All other DACs (scooters)",
          "maximum": 1250,
          "rule_id": "4c78e8dd-fec9-4a09-8807-b1f16a1adbbc",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "0c444869-1674-4234-b4f3-ab5685bcf0d9"
          ],
          "vehicle_types": [
            "scooter"
          ]
        },
        {
          "name": "Non-DAC",
          "maximum": 1500,
          "rule_id": "9680ec38-90c7-43dc-880d-4c4b9cd1f81a",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "1f943d59-ccc9-4d91-b6e2-0c5e771cbc49"
          ],
          "vehicle_types": [
            "bicycle"
          ]
        },
        {
          "name": "Non-DAC",
          "maximum": 1500,
          "rule_id": "dacb5dec-ea0c-4155-bb46-7b4b392d5291",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "1f943d59-ccc9-4d91-b6e2-0c5e771cbc49"
          ],
          "vehicle_types": [
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "221efc03-c3ad-4868-b628-eef93f05e1d6",
      "start_date": 1558389669540,
      "description": "Mobility caps as described in the One-Year Permit",
      "provider_ids": [
        "c20e08cf-8488-46a6-a66c-5d8fb827f7e0"
      ],
      "publish_date": 1566936731809,
      "prev_policies": null
    },
    {
      "name": "LADOT Mobility Caps: Lyft",
      "rules": [
        {
          "name": "SFV DACs",
          "maximum": 500,
          "rule_id": "42938a11-db1e-4c38-84f8-fe4406f4b310",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "e3ed0a0e-61d3-4887-8b6a-4af4f3769c14"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "All other DACs (scooters)",
          "maximum": 500,
          "rule_id": "9d9e3d55-866e-47d2-a0a5-af7b62aaef68",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "0c444869-1674-4234-b4f3-ab5685bcf0d9"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "Non-DAC",
          "maximum": 3000,
          "rule_id": "0dfcb73f-c4ab-40bd-bcbc-a6f3878e5350",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "1f943d59-ccc9-4d91-b6e2-0c5e771cbc49"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "284a5199-365e-4b9d-b5d0-842ea7b1d4f7",
      "start_date": 1558389669540,
      "description": "Mobility caps as described in the One-Year Permit",
      "provider_ids": [
        "e714f168-ce56-4b41-81b7-0b6a4bd26128"
      ],
      "publish_date": 1566936940392,
      "prev_policies": null
    },
    {
      "name": "LADOT Mobility Caps: Spin",
      "rules": [
        {
          "name": "SFV DACs",
          "maximum": 5000,
          "rule_id": "05441326-d626-4817-96c5-54c046279ca6",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "e3ed0a0e-61d3-4887-8b6a-4af4f3769c14"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "All other DACs (scooters)",
          "maximum": 2500,
          "rule_id": "71267fb9-b319-4b0d-9544-36cc7eecbc6d",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "0c444869-1674-4234-b4f3-ab5685bcf0d9"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "Non-DAC",
          "maximum": 3000,
          "rule_id": "3a84a446-0354-4026-91cb-102d18bdf675",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "1f943d59-ccc9-4d91-b6e2-0c5e771cbc49"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "784bb9d8-ae82-49a2-83f2-fe01c8e1bb7b",
      "start_date": 1558389669540,
      "description": "Mobility caps as described in the One-Year Permit",
      "provider_ids": [
        "70aa475d-1fcd-4504-b69c-2eeb2107f7be"
      ],
      "publish_date": 1566937070749,
      "prev_policies": null
    },
    {
      "name": "LADOT Mobility Caps: Wheels",
      "rules": [
        {
          "name": "SFV DACs",
          "maximum": 0,
          "rule_id": "f60af867-9241-4f53-8cfb-4c6c807679f2",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "e3ed0a0e-61d3-4887-8b6a-4af4f3769c14"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "All other DACs (scooters)",
          "maximum": 0,
          "rule_id": "c046953a-6b34-4a28-992d-e993232ffaa2",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "0c444869-1674-4234-b4f3-ab5685bcf0d9"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "Non-DAC",
          "maximum": 3000,
          "rule_id": "70958c50-aa35-4ac6-8905-850e97f40613",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "geographies": [
            "1f943d59-ccc9-4d91-b6e2-0c5e771cbc49"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "65207595-dfdc-4653-bc4c-7cca29f69cb7",
      "start_date": 1558389669540,
      "description": "Mobility caps as described in the One-Year Permit",
      "provider_ids": [
        "b79f8687-526d-4ae6-80bf-89b4c44dc071"
      ],
      "publish_date": 1566937297829,
      "prev_policies": null
    },
    {
      "name": "VSOZ: Drop-off Caps",
      "rules": [
        {
          "name": "Drop-off Caps: Provider Dropped Flag",
          "maximum": 0,
          "rule_id": "c1fcc729-c723-401d-ab68-018f01046813",
          "end_time": "10:00:00",
          "statuses": {
            "available": [
              "provider_drop_off"
            ]
          },
          "rule_type": "count",
          "start_time": "05:00:00",
          "geographies": [
            "6dc968c7-19f4-421c-b9d1-683dd3cdb632",
            "2a4fbdb9-ff76-4060-aa92-1d37e26732e8",
            "9bb19cd1-2530-4f7f-8de0-80e7326a3e32",
            "fe9c910a-7aca-4a42-9d63-e014b3c243d7",
            "7beb1d83-66e7-4654-8c6b-6710fa26d1bd",
            "c7553640-730f-4ae1-a422-68bac4b849cc",
            "e42f7e97-b5e6-4ebe-8ddc-05fc806ce54e",
            "b539054b-541a-43b3-a182-58a0bd0958fd",
            "73779ce8-e0fb-48c0-96ba-a1e7f7738279",
            "aa4dc424-09e4-48f3-8471-df5186927016",
            "f5f4a15d-447f-4969-aedb-a0e94ae5b183",
            "456c25f0-a9ce-4ff3-8610-3cee919a3539",
            "0a484e09-7a95-4e7d-86c7-a10a58268ee2",
            "06b4e69e-da53-4340-8354-5a2262034657",
            "b1fdf441-ce46-4f22-bb70-dd2e99df1001",
            "2166b7dd-10ab-4219-9921-0d8c0f082308",
            "86f9a2bd-48c8-4447-b6eb-60916da16aa1",
            "d5d889c5-b6b9-4b83-bbcb-f5209d8dbcc3",
            "5a5b5ffa-5f9f-4db8-ba09-72c5deaac41a",
            "8ce201f3-34d7-46a2-aed3-282fcb6938ac",
            "2d7f76f0-f45e-4563-8be1-280f77b1181a",
            "9912fa40-b594-492f-91d0-113a7568bb2b",
            "fb411640-0220-43f4-bfc7-6f01350dadfe",
            "45e85d25-a1bd-4972-9871-d7762e1ffe8f",
            "2aa25299-514e-4b3f-9828-533649ceff2e",
            "e1d54dc4-9466-4d7b-bcf2-e873716d0a7b"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "Drop-off Caps: Primary Cap",
          "maximum": 5,
          "rule_id": "c1fcc729-c723-401d-ab68-018f01046813",
          "end_time": "10:00:00",
          "statuses": {
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "start_time": "05:00:00",
          "geographies": [
            "6dc968c7-19f4-421c-b9d1-683dd3cdb632",
            "2a4fbdb9-ff76-4060-aa92-1d37e26732e8",
            "9bb19cd1-2530-4f7f-8de0-80e7326a3e32",
            "fe9c910a-7aca-4a42-9d63-e014b3c243d7",
            "7beb1d83-66e7-4654-8c6b-6710fa26d1bd",
            "c7553640-730f-4ae1-a422-68bac4b849cc",
            "e42f7e97-b5e6-4ebe-8ddc-05fc806ce54e",
            "b539054b-541a-43b3-a182-58a0bd0958fd",
            "73779ce8-e0fb-48c0-96ba-a1e7f7738279",
            "aa4dc424-09e4-48f3-8471-df5186927016",
            "f5f4a15d-447f-4969-aedb-a0e94ae5b183",
            "456c25f0-a9ce-4ff3-8610-3cee919a3539",
            "0a484e09-7a95-4e7d-86c7-a10a58268ee2",
            "06b4e69e-da53-4340-8354-5a2262034657",
            "b1fdf441-ce46-4f22-bb70-dd2e99df1001",
            "2166b7dd-10ab-4219-9921-0d8c0f082308",
            "86f9a2bd-48c8-4447-b6eb-60916da16aa1",
            "d5d889c5-b6b9-4b83-bbcb-f5209d8dbcc3",
            "5a5b5ffa-5f9f-4db8-ba09-72c5deaac41a",
            "8ce201f3-34d7-46a2-aed3-282fcb6938ac",
            "2d7f76f0-f45e-4563-8be1-280f77b1181a",
            "9912fa40-b594-492f-91d0-113a7568bb2b",
            "fb411640-0220-43f4-bfc7-6f01350dadfe",
            "45e85d25-a1bd-4972-9871-d7762e1ffe8f",
            "2aa25299-514e-4b3f-9828-533649ceff2e",
            "e1d54dc4-9466-4d7b-bcf2-e873716d0a7b"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        },
        {
          "name": "Drop-off Caps: User Dropped",
          "maximum": 10,
          "rule_id": "c1fcc729-c723-401d-ab68-018f01046813",
          "end_time": "10:00:00",
          "statuses": {
            "reserved": [],
            "available": [
              "trip_end",
              "cancel_reservation"
            ]
          },
          "rule_type": "count",
          "start_time": "05:00:00",
          "geographies": [
            "6dc968c7-19f4-421c-b9d1-683dd3cdb632",
            "2a4fbdb9-ff76-4060-aa92-1d37e26732e8",
            "9bb19cd1-2530-4f7f-8de0-80e7326a3e32",
            "fe9c910a-7aca-4a42-9d63-e014b3c243d7",
            "7beb1d83-66e7-4654-8c6b-6710fa26d1bd",
            "c7553640-730f-4ae1-a422-68bac4b849cc",
            "e42f7e97-b5e6-4ebe-8ddc-05fc806ce54e",
            "b539054b-541a-43b3-a182-58a0bd0958fd",
            "73779ce8-e0fb-48c0-96ba-a1e7f7738279",
            "aa4dc424-09e4-48f3-8471-df5186927016",
            "f5f4a15d-447f-4969-aedb-a0e94ae5b183",
            "456c25f0-a9ce-4ff3-8610-3cee919a3539",
            "0a484e09-7a95-4e7d-86c7-a10a58268ee2",
            "06b4e69e-da53-4340-8354-5a2262034657",
            "b1fdf441-ce46-4f22-bb70-dd2e99df1001",
            "2166b7dd-10ab-4219-9921-0d8c0f082308",
            "86f9a2bd-48c8-4447-b6eb-60916da16aa1",
            "d5d889c5-b6b9-4b83-bbcb-f5209d8dbcc3",
            "5a5b5ffa-5f9f-4db8-ba09-72c5deaac41a",
            "8ce201f3-34d7-46a2-aed3-282fcb6938ac",
            "2d7f76f0-f45e-4563-8be1-280f77b1181a",
            "9912fa40-b594-492f-91d0-113a7568bb2b",
            "fb411640-0220-43f4-bfc7-6f01350dadfe",
            "45e85d25-a1bd-4972-9871-d7762e1ffe8f",
            "2aa25299-514e-4b3f-9828-533649ceff2e",
            "e1d54dc4-9466-4d7b-bcf2-e873716d0a7b"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "56e0be92-1cfd-4016-8fcc-11c0b347ee83",
      "start_date": 1567207104779,
      "description": "LADOT Venice Special Ops Zone drop-off caps",
      "provider_ids": null,
      "publish_date": 1567207122511,
      "prev_policies": [
        "5ba40320-b187-4c51-bd52-3dad0a60f0cc",
        "ac467d72-c539-4a32-9759-69cc9dc86944"
      ]
    },
    {
      "name": "VSOZ: Provider Caps",
      "rules": [
        {
          "name": "VSOZ Cap",
          "maximum": 150,
          "rule_id": "f161409f-31fc-4a15-917f-7a1eaf66d0ab",
          "end_time": "10:00:00",
          "statuses": {
            "trip": [],
            "reserved": [],
            "available": [],
            "unavailable": []
          },
          "rule_type": "count",
          "start_time": "05:00:00",
          "geographies": [
            "e0e4a085-7a50-43e0-afa4-6792ca897c5a"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "da1bc3ef-8358-408a-a255-34a5d46ae991",
      "start_date": 1567062000000,
      "description": "LADOT Venice Special Ops Zone provider total vehicle caps",
      "provider_ids": null,
      "publish_date": 1567207153906,
      "prev_policies": [
        "94cd621c-bf29-430e-a0b8-9362a330b268",
        "4c1464b6-490e-4540-adbf-de7b98d8f9fd"
      ]
    },
    {
      "name": "VSOZ: Measure Drop-offs",
      "rules": [
        {
          "name": "VSOZ Measure",
          "maximum": 0,
          "rule_id": "f161409f-31fc-4a15-917f-7a1eaf66d0ab",
          "end_time": "23:59:59",
          "statuses": {
            "available": [
              "provider_drop_off"
            ]
          },
          "rule_type": "count",
          "start_time": "10:00:00",
          "geographies": [
            "e0e4a085-7a50-43e0-afa4-6792ca897c5a"
          ],
          "vehicle_types": [
            "bicycle",
            "scooter"
          ]
        }
      ],
      "end_date": null,
      "policy_id": "362d8826-e894-4ef8-b57e-97e03acc84ef",
      "start_date": 1567062000000,
      "description": "LADOT Venice Special Ops Zone Measure Non-cap Drop-offs",
      "provider_ids": null,
      "publish_date": 1567207259963
    }
  ]
}

export default samplePolicy