﻿using UnityEngine;
using System.Collections;

public class BuildingController : MonoBehaviour {
	ResourceController resources;
	Building selectedBuilding;
	public GameObject buildingUI;

	void Start ()
	{
		resources = GetComponent<ResourceController>();
	}

	public void SetSelectedBuilding (Building building)
	{
		if (selectedBuilding != null) selectedBuilding.SetSelected(false);
		selectedBuilding = building;
		selectedBuilding.SetSelected(true);
		UpdateUI(building);
	}

	public void AttemptBuyBuilding (Building building)
	{
		if (resources.cash >= building.price)
		{
			BuyBuilding(building);
		}
	}

	void BuyBuilding (Building building)
	{
		resources.ChangeCash(-building.price);
		building.SetOwned(true, "player");
		UpdateUI(building);
	}

	void UpdateUI (Building building)
	{
		buildingUI.SetActive(building.isOwned);
	}
}