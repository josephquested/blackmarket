using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class ResourceController : MonoBehaviour {
	public Text cashLabel;
	public int cash;

	void Start ()
	{
		UpdateUI();
	}

	public void ChangeCash (int value)
	{
		cash += value;
		UpdateUI();
	}

	void UpdateUI ()
	{
		cashLabel.text = "$" + cash.ToString();
	}
}
