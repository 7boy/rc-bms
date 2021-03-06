package com.zcsoft.rc.bms.railway.service.impl;

import com.zcsoft.rc.bms.api.railway.entity.*;
import com.zcsoft.rc.bms.railway.dao.SafetyZoneDAO;
import com.zcsoft.rc.bms.railway.service.SafetyZoneService;
import org.bson.Document;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class SafetyZoneServiceImpl implements SafetyZoneService {

    private SafetyZoneDAO safetyZoneDAO;

    @Resource
    public void setSafetyZoneDAO(SafetyZoneDAO safetyZoneDAO) {
        this.safetyZoneDAO = safetyZoneDAO;
    }

    @Override
    public SafetyZoneAddRsp add(SafetyZoneAddReq req) {

        List<List<Double>> safetyZone = req.getSafetyZone();
        safetyZone.add(safetyZone.get(0));

        String id = safetyZoneDAO.add(Arrays.asList(safetyZone));

        SafetyZoneAddRsp rsp = new SafetyZoneAddRsp();
        rsp.setId(id);

        return rsp;
    }

    @Override
    public SafetyZoneDeleteRsp delete(SafetyZoneDeleteReq req) {

        safetyZoneDAO.delete(req.getId());

        SafetyZoneDeleteRsp rsp = new SafetyZoneDeleteRsp();
        rsp.setId(req.getId());

        return rsp;
    }

    @Override
    public void deleteAll() {
        safetyZoneDAO.deleteAll();
    }

    @Override
    public SafetyZoneListRsp list() {
        List<Document> documentList = safetyZoneDAO.list();

        List<List<List<Double>>> safetyZoneList = new ArrayList<>(documentList.size());

        documentList.forEach(document -> {
            Document geometry = document.get("geometry", Document.class);
            List<List<List<Double>>> safetyZone = geometry.get("coordinates", List.class);
            safetyZoneList.add(safetyZone.get(0));
        });

        SafetyZoneListRsp rsp = new SafetyZoneListRsp();
        rsp.setSafetyZoneList(safetyZoneList);

        return rsp;
    }

}
