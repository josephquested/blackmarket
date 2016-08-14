using UnityEngine;
using System.Collections;

public class GameController : MonoBehaviour {

	Building selectedBuilding;

	public void SetSelectedBuilding (Building building)
	{
		if (selectedBuilding != null) selectedBuilding.SetCanvasActive(false);
		selectedBuilding = building;
		selectedBuilding.SetCanvasActive(true);
	}

	public void AttemptBuyBuilding (Building building)
	{
		print("buy!");
	}
}
